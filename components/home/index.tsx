import React, { useEffect, useState } from 'react'
import Favicon from '../icons/Favicon'
import Hammer from '../icons/Hammer'
import Camera from '../icons/Camera'
import Book from '../icons/Book'
import Ligth from '../icons/Ligth'
import Play from '../icons/Play'
import ValeCorrea from '../icons/ValeCorrea'
import V from '../../static/icons/SVG/V.svg'
import Heart from '../icons/Heart'
import IconMenu from './IconMenu'
import Inspiration from '../icons/Inspiration'
import styleCarrousel from './home.module.css'
import bannerImg from '../../static/home/banner.svg'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import hammer from '../../static/icons/SVG/hammer-black.svg'
import NavBar from './nav-bar'
import Modal from './components/ui/input-global/modal.tsx/modal'
import arrow from '../../static/icons/SVG/arrow.svg'

const IconsTouch = () => {
	const [rotationFavicon, setRotationFavicon] = useState(false)
	const [intervalColor, setIntervalColor] = useState(true)
	useEffect(() => {
		const interval = setInterval(() => {
			setRotationFavicon(true)

			setTimeout(() => {
				setIntervalColor(!intervalColor)
			}, 2300)
			setTimeout(() => {
				setRotationFavicon(false)
			}, 3000)
		}, 3000)
		return () => clearInterval(interval)
	}, [intervalColor])
	const [openModal, setOpenModal] = useState(false)
	return (
		<div className='flex flex-col justify-between w-full min-h-screen pb-8'>
			<div className='block sm:hidden'>
				<NavBar />
			</div>
			<div className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-[44%]'>
				<div className='relative md:w-[19.3vw] md:h-[19.3vw] w-[50vw] h-[50vw] mx-auto my-1 flex justify-center items-center'>
					<IconMenu
						link={'psicologia'}
						title={'Psicología'}
						className='left-[50%]  top-[-30%] translate-x-[-50%]'
					>
						<Book
							size='60%'
							strokeMiterlimit={10}
						/>
					</IconMenu>
					<IconMenu
						link={'organico'}
						title={'Orgánico'}
						className='top-[-10%] right-[-15%] '
					>
						<Heart size='60%' />
					</IconMenu>
					<IconMenu
						link={'bienestar'}
						title={'Bienestar'}
						className='right-[-30%]  top-[50%] translate-y-[-50%]'
					>
						<Inspiration size='60%' />
					</IconMenu>
					<IconMenu
						link={'inspiracion'}
						title={'Inspiración'}
						className='bottom-[-15%] right-[-15%]'
					>
						<Camera size='60%' />
					</IconMenu>
					<IconMenu
						link={'/home'}
						title={'Video'}
						onClick={() => setOpenModal(!openModal)}
						className='right-[50%]  bottom-[-30%] translate-x-[50%]'
					>
						<Play size='60%' />
					</IconMenu>
					<IconMenu
						link={'derecho'}
						title={'Derecho'}
						className='top-[-10%] left-[-10%] '
					>
						<img
							className='w-[60%]'
							src={`${hammer.src}`}
							alt='hammer'
						/>
					</IconMenu>
					<IconMenu
						link={'sobre-mi'}
						title={'Sobre mí'}
						className='left-[-30%]  bottom-[50%] translate-y-[50%] '
					>
						<Image
							src={V}
							alt='V'
							className={`w-[40%]`}
						/>
					</IconMenu>
					<IconMenu
						link={'filosofia'}
						title={'Filosofía'}
						className='bottom-[-10%] left-[-10%] '
					>
						<Ligth size='60%' />
					</IconMenu>
					<div
						className={`  ${
							rotationFavicon && styleCarrousel.animationFavicon
						} md:w-[10.3vw] w-[60%] mx-auto`}
					>
						<Favicon background={intervalColor ? `rgba(139, 69, 19, 1)` : '#000'} />
					</div>
				</div>
			</div>
			<div className='fixed z-0 bottom-12 '>
				<Marquee direction='left'>
					<div className='flex px-0 gap-[2vw]'>
						<Image
							src={bannerImg}
							alt='banner'
							className={`md:w-[60vw] `}
						/>
						<Image
							src={bannerImg}
							alt='banner'
							className={`md:w-[60vw] `}
						/>
						<Image
							src={bannerImg}
							alt='banner'
							className={`md:w-[60vw] `}
						/>
						<Image
							src={bannerImg}
							alt='banner'
							className={`md:w-[60vw] `}
						/>
					</div>
				</Marquee>
			</div>
			<Modal
				openModal={openModal}
				setOpenModal={setOpenModal}
			>
				<div className='flex items-center flex-col gap-10 align-middle justify-center h-full'>
					<p className='leading-none text-center font-playfair text-text '>
						Espacio en construcción...
					</p>
					<button
						className='flex flex-col items-center text-sm font-playfairSemiBold '
						onClick={() => setOpenModal(false)}
					>
						<img
							src={arrow.src}
							alt='Flecha'
							className='w-9'
						/>
						volver
					</button>
				</div>
			</Modal>
		</div>
	)
}

export default IconsTouch
