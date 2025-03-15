// frontend/src/components/TaskList.tsx
"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/redux/hooks";
import { RootState } from "@/app/redux/store"; 
import { fetchTasks, deleteTask, updateTask } from "@/app/redux/taskSlice";
import Card from "./card";
import LoadingSpinner from "./LoadingSpinner"; // Ensure this component exists

export default function TaskList() {
  const dispatch = useAppDispatch();
  const { tasks, loading, error } = useAppSelector(
    (state: RootState) => state.tasks
  );

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  /**
   * Handle updating the status of a specific task.
   * @param taskId - The ID of the task to update
   * @param newStatus - The new status to set
   */
  const handleStatusChange = (
    taskId: string,
    newStatus: "pending" | "in-progress" | "completed"
  ) => {
    dispatch(
      updateTask({
        _id: taskId,
        status: newStatus,
      })
    );
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 rounded-lg bg-red-50 dark:bg-red-900/20">
        Error loading tasks: {error}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-gray-500 dark:text-gray-400 text-center py-8">
        No tasks found. Add your first task!
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl space-y-4">
      {tasks.map((task) => (
        <Card
          key={task._id}
          task={task}
          onDelete={() => dispatch(deleteTask(task._id))}
          onStatusChange={(newStatus) => handleStatusChange(task._id, newStatus)}
        />
      ))}
    </div>
  );
}
