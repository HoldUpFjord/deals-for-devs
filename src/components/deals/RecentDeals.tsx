import React from 'react'
import { getDeals } from '@/queries/deals'
import DealsList from './DealsList'

interface RecentDealsProps {
  limit?: number
}
export default async function RecentDeals({ limit }: RecentDealsProps) {
  const deals = await getDeals({ limit})
  return <DealsList deals={deals} />
}
