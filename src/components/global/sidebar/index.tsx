'use client'
import { getWorkspaces } from '@/actions/workspace'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useQueryData } from '@/hooks/useQueryData'
import { WorkspaceProps } from '@/types/index.type'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import Modal from '../modal'

type Props = {
    activeWorkspaceId: string
}

const Sidebar = ({activeWorkspaceId}: Props) => {

    const router = useRouter()
    
    const {data, isFetched} = useQueryData(['user-workspaces'], getWorkspaces)
    
    const {data: workspace} = data as WorkspaceProps

    const onChangeActiveWorkspace = (value: string) => {
        router.push(`/dashboard/${value}`)
    }

    const currentWorkspace = workspace.workspace.find((s) => s.id === activeWorkspaceId)

  return (
    <div className="bg-[#111111] flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-hidden">
        <div className="bg-[#111111] p-4 flex gap-2 justify-center items-center mb-4 absolute top-0 left-0 right-0">
            <Image src='/opal-logo.svg' alt='logo' width={40} height={40} />
            <p className='text-2xl'>Opal</p>
        </div>
            <Select defaultValue={activeWorkspaceId} onValueChange={onChangeActiveWorkspace} >
                <SelectTrigger className="mt-16 text-neutral-400 bg-transparent" >
                    <SelectValue placeholder='Select a workspace'></SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-[#111111] backdrop-blur-xl" >
                    <SelectGroup>
                        <SelectLabel>Workspaces</SelectLabel>
                        <Separator/>
                        {workspace.workspace.map((workspace) => (
                            <SelectItem value={workspace.id} key={workspace.id} >
                                {workspace.name}
                            </SelectItem>
                        ))}
                        {workspace.members.length > 0 && 
                        workspace.members.map((workspace) => workspace.WorkSpace && (
                            <SelectItem value={workspace.WorkSpace.id} key={workspace.WorkSpace.id} >
                                {workspace.WorkSpace.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <p className='w-full text-[#9D9D9D] font-bold mt-4'>Menu</p>
            <nav className='w-full'>

            </nav>
    </div>
  )
}

export default Sidebar