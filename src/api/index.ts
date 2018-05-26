import { fetchRequest } from './rest'

export function getStats (imageId: string, kycId: string) {
  return fetchRequest(`/store/internal/kyc/${kycId}/media/photo/${imageId}`,
    'delete',
    {})
}
