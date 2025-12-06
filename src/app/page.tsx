"use client";

import React, { useState, useEffect, useRef } from "react";
import "./globals.css";
import Header from "../components/Header";
import Axios from "axios";
import CharacterList from "../components/CharacterList";
import Search from "../components/Search";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  const isLoadingRef = useRef(false);
  const totalCountRef = useRef(0);
  const charactersRef = useRef<any[]>([]);

  // Sync refs with state for use in event listeners
  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);

  useEffect(() => {
    totalCountRef.current = totalCount;
  }, [totalCount]);

  useEffect(() => {
    charactersRef.current = characters;
  }, [characters]);


  // Search Mode
  useEffect(() => {
    let active = true; // For race condition handling

    const fetchSearch = async () => {
      setIsLoading(true);
      try {
        const result = await Axios(
          `https://swapi.dev/api/people/?search=${query}`
        );

        if (active) {
          setCharacters(result.data.results);
          setTotalCount(result.data.count);
        }
      } catch (error) {
        if (active) {
          console.error("Error fetching data:", error);
          setCharacters([]);
          setTotalCount(0);
        }
      }
      if (active) setIsLoading(false);
    };

    if (query) {
      setPage(1);
      fetchSearch();
    } else {
      // Switch to browse mode reset
      setCharacters([]);
      setTotalCount(0);
      setPage(1);
    }

    return () => { active = false; };
  }, [query]);

  // Browse Mode (Pagination)
  useEffect(() => {
    let active = true;

    const fetchPeople = async () => {
      if (!query) {
        if (page === 1) setIsLoading(true);
        else isLoadingRef.current = true; // Temporarily mark as loading for scroll safety if we don't trigger state update efficiently

        // Actually, we should set state if we want to show spinner
        // But for pagination usually we just append.
        // Let's rely on the upstream `isLoading` state for the Spinner component if page==1.
        if (page > 1) setIsLoading(true); // Show spinner at bottom? Or just load. Currently CharacterList shows spinner if isLoading is true, which hides list.
        // We probably don't want to hide the list when paging.
        // Let's modify UI later if needed, for now standard behavior.

        try {
          const result = await Axios(`https://swapi.dev/api/people/?page=${page}`);

          if (active) {
            setTotalCount(result.data.count);
            if (page === 1) {
              setCharacters(result.data.results);
            } else {
              setCharacters(prev => [...prev, ...result.data.results]);
            }
          }
        } catch (error) {
          if (active) console.error("Error fetching people:", error);
        }
        if (active) setIsLoading(false);
      }
    };

    fetchPeople();

    return () => { active = false; };
  }, [page, query]);

  // Infinite Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        if (!query && !isLoadingRef.current && charactersRef.current.length < totalCountRef.current) {
          setIsLoading(true); // Block immediate re-entry
          setPage(prev => prev + 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <div className="text-center">
        <h1>Total Characters: {totalCount}</h1>
        <br />
        <br />
      </div>

      <CharacterList isLoading={isLoading} characters={characters} />
    </div>
  );
}
