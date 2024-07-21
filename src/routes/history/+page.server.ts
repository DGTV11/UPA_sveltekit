import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  const { data: history_timeline } = await supabase.from('history_timeline').select('title,content,date')
  return { history_timeline: history_timeline ?? [] }
}