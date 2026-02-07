"use client"

import { useState } from "react"
import { MessageSquareCode, Check } from "lucide-react"
import { toast } from "sonner"

interface GeminiDiscussProps {
  title: string
  context: string
}

export function GeminiDiscuss({ title, context }: GeminiDiscussProps) {
  const [copied, setCopied] = useState(false)

  const handleDiscuss = async () => {
    const prompt = `I am reading about a project called "${title}". Context: ${context}. Explain this to me in detail and suggest improvements.`
    
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      toast.success("Prompt copied to clipboard!")
      
      setTimeout(() => {
        setCopied(false)
        window.open("https://gemini.google.com/app", "_blank")
      }, 1000)
    } catch (err) {
      console.error("Failed to copy:", err)
      toast.error("Failed to copy prompt.")
    }
  }

  return (
    <button
      onClick={handleDiscuss}
      className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-blue-500/30 text-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white transition-all cyber-box-glow"
      title="Discuss with Gemini"
    >
      {copied ? <Check className="w-4 h-4" /> : <MessageSquareCode className="w-4 h-4" />}
      <span>{copied ? "Copied!" : "Discuss"}</span>
    </button>
  )
}
