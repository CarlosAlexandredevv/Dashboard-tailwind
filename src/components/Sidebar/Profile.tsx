import { LogOut } from 'lucide-react'
import { Button } from '../Button'
import Image from 'next/image'

export interface ProfileProps {}

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://github.com/carlosalexandredevv.png"
        className="rounded-full"
        alt="Foto de perfil de Carlos Alexandre"
        width={40}
        height={40}
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Carlos Alexandre
        </span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          carlos@email.com
        </span>
      </div>
      <Button variant="ghost" className="ml-auto">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  )
}
