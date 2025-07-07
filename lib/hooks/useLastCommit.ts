import { useState, useEffect } from 'react'

interface LastCommitData {
  lastCommitDate: string
  formatted: string
  fallback?: boolean
}

export function useLastCommit() {
  const [data, setData] = useState<LastCommitData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLastCommit = async () => {
      try {
        const response = await fetch('/api/last-commit')
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du dernier commit')
        }
        const commitData = await response.json()
        setData(commitData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue')
        // Fallback sur la date actuelle
        setData({
          lastCommitDate: new Date().toISOString(),
          formatted: new Date().toLocaleDateString('fr-FR'),
          fallback: true
        })
      } finally {
        setLoading(false)
      }
    }

    fetchLastCommit()
  }, [])

  return { data, loading, error }
}
