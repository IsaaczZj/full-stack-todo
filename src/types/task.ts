export interface Task {
  id: string
  title: string
  concluded: boolean
  status:'creating' | "created"
}