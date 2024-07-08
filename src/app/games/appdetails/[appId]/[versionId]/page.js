import DownloadVersions from '@/app/downloadVersions';
import React from 'react'

const page = ({params}) => {
  return (
    <>
    <DownloadVersions appId={params.appId} versionId={params.versionId} name='games'/>
    </>
  )
}

export default page;