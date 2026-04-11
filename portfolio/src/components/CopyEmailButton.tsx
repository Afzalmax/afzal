import { useState } from 'react'
import './styles/CopyEmailButton.css'

type Props = {
  email: string
  className?: string
}

export function CopyEmailButton({ email, className = '' }: Props) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = email
      ta.style.position = 'fixed'
      ta.style.left = '-9999px'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      className={`copy-email-btn ${className}`.trim()}
      onClick={handleCopy}
      aria-label={copied ? 'Copied to clipboard' : `Copy ${email} to clipboard`}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}
