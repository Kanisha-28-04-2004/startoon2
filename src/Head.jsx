import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <>
    <div className='flex flex-row w-100% justify-center gap-28 mt-8'>
      <div>
        <h2 className='text-[22px] text-[#343481]'>S.Meena, F/23</h2>
        <p className='text-[14px] text-[#343481]'>Patient ID: 87 20200727153457</p>
      </div>
      <div>
        <FontAwesomeIcon className="border-[#343481] text-[#25255d] border-2 rounded-3 px-2 py-2 text-4xl" icon={faUser} />
      </div>
    </div>
    </>
  )
}
export default Header