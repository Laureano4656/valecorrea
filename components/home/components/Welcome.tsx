import React, { useEffect, useState } from 'react'
import Favicon from '../../icons/Favicon'
import BarLoading from '../../icons/BarLoading'
import useIsMobile from '../../utils/isMobile'

const Welcome = () => {
	const isMobile = useIsMobile()
	const [timer, setTimer] = useState({ timer1: true, timer2: false })

	useEffect(() => {
		const handleTimeout = setTimeout(() => {
			setTimer(prevTimer => ({ ...prevTimer, timer1: false, timer2: true }))
		}, 2500)

		return () => clearTimeout(handleTimeout)
	}, [timer.timer1])

	return (
		<div className='fixed flex items-center justify-center w-full h-screen bg-white'>
			{timer.timer1 &&
				(isMobile ? (
					<div className='relative flex items-center justify-center gap-3 overflow-hidden bg-white h-max w-max pr-[5vw] '>
						<div className=' bg-gradient-to-r from-white via-white to-transparent z-10 w-[25vw] sm:w-[10.5vw] h-[25vw] sm:h-[10.5vw]  relative flex justify-end items-center'>
							<span className='absolute h-[95%] w-[95%] flex items-center justify-center  -translate-x-1/2 left-1/2'>
								<Favicon size='100%' />
							</span>
						</div>
						<h2 className='text-[12vw] sm:text-[7.5vw] font-playfair favicon-welcome'>
							VCORREA
						</h2>
					</div>
				) : (
					<div className='relative flex items-center justify-center gap-3 overflow-hidden bg-white h-max w-max pr-[5vw] '>
						<div className=' bg-gradient-to-r from-white via-white to-transparent z-10 w-[10.5vw] h-[10.5vw]  relative flex justify-end items-center'>
							<span className='absolute h-[95%] w-[95%] flex items-center justify-center  -translate-x-1/2 left-1/2'>
								<Favicon size='100%' />
							</span>
						</div>
						<h2 className='text-[7.5vw] font-playfair favicon-welcome'>VCORREA</h2>
					</div>
				))}

			{timer.timer2 && (
				<div className='flex flex-col items-center text-center welcome-block'>
					<h2 className='text-text font-playfairExtraBold mb-[1vw]'>
						<strong>hola!</strong>
					</h2>
					<p className='mb-[24px] sm:mb-[1.8vw] text-text font-playfair'>
						estas ingresando <br /> a un área de plena lectura
					</p>
					<BarLoading size={isMobile ? '50%' : '13.4vw'} />
				</div>
			)}
		</div>
	)
}

export default Welcome
