import { useState, useEffect } from "react";

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  role: string;
  location: string;
  bio: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  dueDate: string;
  userId: string;
}

// Simple internal storage key
const STORAGE_KEY = "syarikex_storage";

export interface AIModel {
  id: string;
  name: string;
  trainingData: string; // e.g., "1.2TB"
  inferenceSpeed: number; // ms
  errorRate: number; // %
  efficiency: number; // %
}

export interface Activity {
  id: string;
  type: "profile_update" | "task_completion" | "login" | "project_forge";
  user: string;
  timestamp: string;
  description: string;
}

export interface SearchableItem {
  id: string;
  type: "AI Tool" | "Research Paper";
  title: string;
  description: string;
  category: string;
}

interface AppData {
  profile: UserProfile;
  tasks: Task[];
  aiModels: AIModel[];
  activities: Activity[];
  searchables: SearchableItem[];
}

const defaultData: AppData = {
  profile: {
    name: "Isaac SYARIKE",
    email: "isaacbsisyarike@gmail.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isaac",
    role: "Founder & CEO",
    location: "Lagos, Nigeria",
    bio: "Visionary entrepreneur and technologist building futuristic research ecosystems.",
  },
  aiModels: [
    { id: "m1", name: "Nexus-Primary", trainingData: "2.4TB", inferenceSpeed: 42, errorRate: 0.12, efficiency: 98 },
    { id: "m2", name: "Core-A-Alpha", trainingData: "0.8TB", inferenceSpeed: 105, errorRate: 2.1, efficiency: 85 },
    { id: "m3", name: "Neural-X-Gen", trainingData: "1.5TB", inferenceSpeed: 62, errorRate: 0.85, efficiency: 92 },
    { id: "m4", name: "Vision-A1-Opt", trainingData: "4.2TB", inferenceSpeed: 148, errorRate: 3.4, efficiency: 78 },
  ],
  activities: [
    { id: "a1", type: "login", user: "Isaac SYARIKE", timestamp: new Date().toISOString(), description: "System entry via universal ID" },
    { id: "a2", type: "task_completion", user: "Isaac SYARIKE", timestamp: new Date(Date.now() - 3600000).toISOString(), description: "Completed: Develop Neural Link Interface" },
    { id: "a3", type: "profile_update", user: "Isaac SYARIKE", timestamp: new Date(Date.now() - 7200000).toISOString(), description: "Updated Neural Signature bio" },
    { id: "a4", type: "project_forge", user: "System Core", timestamp: new Date(Date.now() - 86400000).toISOString(), description: "New orbit node established" },
  ],
  searchables: [
    { id: "s1", type: "AI Tool", title: "Nexus Forge", description: "Advanced neural architecture generator for scalable AI.", category: "Generative AI" },
    { id: "s2", type: "AI Tool", title: "Spectral Vision", description: "Real-time object recognition in multidimensional spectra.", category: "Computer Vision" },
    { id: "s3", type: "Research Paper", title: "Quantum Entanglement in Neural Nets", description: "Exploring synchronization patterns in distributed AI clusters.", category: "Quantum AI" },
    { id: "s4", type: "Research Paper", title: "Sustainable Compute in Africa", description: "Architecture for low-energy high-performance research nodes.", category: "Infrastructure" },
  ],
  tasks: [
    {
      id: "1",
      title: "Develop Neural Link Interface",
      description: "Initialize the core connection module for the Neural Metrics dashboard.",
      status: "in-progress",
      priority: "high",
      dueDate: "2026-05-15",
      userId: "1",
    },
    {
      id: "2",
      title: "Universe Grid Expansion",
      description: "Scale the CSS Grid layout to support 100+ dynamic universe stations.",
      status: "todo",
      priority: "medium",
      dueDate: "2026-05-20",
      userId: "1",
    },
    {
      id: "3",
      title: "AI Assistant Refinement",
      description: "Optimize the floating assistant's response latency.",
      status: "completed",
      priority: "medium",
      dueDate: "2026-05-01",
      userId: "1",
    }
  ],
};

export const useMockData = () => {
  const [data, setData] = useState<AppData>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateProfile = (profile: Partial<UserProfile>) => {
    setData((prev) => ({ ...prev, profile: { ...prev.profile, ...profile } }));
  };

  const addTask = (task: Omit<Task, "id">) => {
    const newTask = { ...task, id: Math.random().toString(36).substring(7) };
    setData((prev) => ({ ...prev, tasks: [...prev.tasks, newTask] }));
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setData((prev) => ({
      ...prev,
      tasks: prev.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    }));
  };

  const deleteTask = (id: string) => {
    setData((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((t) => t.id !== id),
    }));
  };

  return {
    profile: data.profile,
    tasks: data.tasks,
    aiModels: data.aiModels,
    activities: data.activities,
    searchables: data.searchables,
    updateProfile,
    addTask,
    updateTask,
    deleteTask,
  };
};
