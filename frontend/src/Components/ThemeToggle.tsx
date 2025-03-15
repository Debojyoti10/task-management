// src/components/ThemeToggle.tsx
"use client";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.theme = isDark ? 'dark' : 'light';
    
    document.documentElement.style.setProperty(
      '--background', 
      isDark ? '10 10 10' : '255 255 255'
    );
    
    document.documentElement.style.setProperty(
      '--foreground', 
      isDark ? '237 237 237' : '23 23 23'
    );
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-foreground text-background"
    >
      Toggle Theme
    </button>
  );
}