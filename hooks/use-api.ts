"use client";

import { useState, useEffect } from 'react';
import { apiService, Product, Category, Brand, BlogPost, FAQ, Page } from '@/lib/api';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useProducts(params?: {
  category?: string;
  brand?: string;
  search?: string;
  featured?: boolean;
  new?: boolean;
  bestseller?: boolean;
  page?: number;
  ordering?: string;
}) {
  const [state, setState] = useState<UseApiState<{ results: Product[]; count: number; next?: string; previous?: string }>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await apiService.getProducts(params);
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error instanceof Error ? error.message : 'خطا در دریافت محصولات' });
      }
    };

    fetchProducts();
  }, [params?.category, params?.brand, params?.search, params?.featured, params?.new, params?.bestseller, params?.page, params?.ordering]);

  return state;
}

export function useProduct(slug: string) {
  const [state, setState] = useState<UseApiState<Product>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await apiService.getProduct(slug);
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error instanceof Error ? error.message : 'خطا در دریافت محصول' });
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  return state;
}

export function useFeaturedProducts() {
  const [state, setState] = useState<UseApiState<Product[]>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await apiService.getFeaturedProducts();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error instanceof Error ? error.message : 'خطا در دریافت محصولات ویژه' });
      }
    };

    fetchFeaturedProducts();
  }, []);

  return state;
}

export function useNewProducts() {
  const [state, setState] = useState<UseApiState<Product[]>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await apiService.getNewProducts();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error instanceof Error ? error.message : 'خطا در دریافت محصولات جدید' });
      }
    };

    fetchNewProducts();
  }, []);

  return state;
}

export function useBestsellerProducts() {
  const [state, setState] = useState<UseApiState<Product[]>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchBestsellerProducts = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await apiService.getBestsellerProducts();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error instanceof Error ? error.message : 'خطا در دریافت پرفروش‌ترین محصولات' });
      }
    };

    fetchBestsellerProducts();
  }, []);

  return state;
}

export function useCategories() {
  const [state, setState] = useState<UseApiState<Category[]>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await apiService.getCategories();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error instanceof Error ? error.message : 'خطا در دریافت دسته‌بندی‌ها' });
      }
    };

    fetchCategories();
  }, []);

  return state;
}

export function useBrands() {
  const [state, setState] = useState<UseApiState<Brand[]>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await apiService.getBrands();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error instanceof Error ? error.message : 'خطا در دریافت برندها' });
      }
    };

    fetchBrands();
  }, []);

  return state;
}

export function useBlogPosts(params?: {
  category?: string;
  featured?: boolean;
  search?: string;
  page?: number;
}) {
  const [state, setState] = useState<UseApiState<{ results: BlogPost[]; count: number; next?: string; previous?: string }>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await apiService.getBlogPosts(params);
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error instanceof Error ? error.message : 'خطا در دریافت مقالات' });
      }
    };

    fetchBlogPosts();
  }, [params?.category, params?.featured, params?.search, params?.page]);

  return state;
}

export function useFeaturedBlogPosts() {
  const [state, setState] = useState<UseApiState<BlogPost[]>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchFeaturedBlogPosts = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await apiService.getFeaturedBlogPosts();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error instanceof Error ? error.message : 'خطا در دریافت مقالات ویژه' });
      }
    };

    fetchFeaturedBlogPosts();
  }, []);

  return state;
}

export function useFAQs(params?: { category?: string }) {
  const [state, setState] = useState<UseApiState<FAQ[]>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await apiService.getFAQs(params);
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error instanceof Error ? error.message : 'خطا در دریافت سوالات متداول' });
      }
    };

    fetchFAQs();
  }, [params?.category]);

  return state;
}

export function usePage(slug: string) {
  const [state, setState] = useState<UseApiState<Page>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await apiService.getPage(slug);
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error instanceof Error ? error.message : 'خطا در دریافت صفحه' });
      }
    };

    if (slug) {
      fetchPage();
    }
  }, [slug]);

  return state;
}
