import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles/years-side-bar.module.css'
import useCategoryYear from '../../../utils/useCategoryYear'
import useUserLogin, {
	useUserLoginWithStorage
} from '../../../utils/useAllCategoriesStore'
import CheckIcon from '../../../icons/CheckIcon'
import CrossIcon from '../../../icons/CrossIcon'
import arrow from '../../../../static/icons/SVG/arrow.svg'
import save from '../../../../static/icons/SVG/save.svg'
import { BASE_URL } from '../../../../helpers/env'
import axios from 'axios'
import Modal from '../../components/ui/input-global/modal.tsx/modal'

interface CategoriesProps {
	categories: any
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
	const router = useRouter()
	const [categoriesPerYear, setCategoriesPerYear] = useState(categories)
	const { userLogin } = useUserLoginWithStorage()
	const { selectedYear } = useCategoryYear()
	const [openModal, setOpenModal] = useState(false)
	useEffect(() => {
		const filteredCategories = categories.filter(
			values => values.year === selectedYear
		)
		setCategoriesPerYear(filteredCategories)
	}, [categories, selectedYear])

	const changeVisibility = async (id: number) => {
		console.log(id)
		const response = await axios.put(
			`${BASE_URL}/notes/${id}/changeVisibility`,
			{}
		)
		if (response.status === 200) {
			setCategoriesPerYear(prevCategories =>
				prevCategories.map(category =>
					category.id === id ? { ...category, active: !category.active } : category
				)
			)
		}
		setOpenModal(false)
	}

	return (
		<ul className='pt-[1.3vw] relative flex flex-col gap-[6px] sm:w-full sm:items-center'>
			{categoriesPerYear.map(category => (
				<li
					key={category.id}
					className='z-10 relative sm:ml-[7vw] sm:w-[53vw] w-[70vw]'
				>
					<Link href={`${router.pathname}/${category.id}`}>
						<p
							className={`hover:opacity-100 font-playfairSemiBold w-full block text-[19px] leading-6 overflow-hidden text-ellipsis whitespace-nowrap ${styles.text}`}
						>
							{category.title}
						</p>
					</Link>
					{userLogin ? (
						<span
							onClick={() => setOpenModal(true)}
							className='absolute -translate-x-1/2 -translate-y-1/2 -right-6 top-1/2'
						>
							{category.active ? <CheckIcon size='12px' /> : <CrossIcon size='12px' />}
						</span>
					) : (
						category.active && (
							<span className='absolute -translate-x-1/2 -translate-y-1/2 -right-6 top-1/2'>
								<CheckIcon size='12px' />
							</span>
						)
					)}
					<Modal
						openModal={openModal}
						setOpenModal={setOpenModal}
					>
						<p className='font-semibold text-text font-playfairSemiBold'>atenti!</p>
						<p className='leading-none text-center font-playfair text-text '>
							Deseas cambiar la
							<br /> visibilidad de <br />
							esta nota ?
						</p>
						<div className='flex items-center justify-between gap-2 w-[50%] mx-auto '>
							<button
								className='flex flex-col items-center text-sm font-playfairSemiBold '
								onClick={() => setOpenModal(false)}
							>
								<img
									src={arrow.src}
									alt='Flecha'
									className='w-9'
								/>
								no,volver
							</button>
							<button
								onClick={() => changeVisibility(category.id)}
								className='flex flex-col items-center text-sm font-playfairSemiBold '
							>
								<img
									src={save.src}
									alt='Flecha'
									className='w-9'
								/>
								si, cambiar
							</button>
						</div>
					</Modal>
				</li>
			))}
		</ul>
	)
}

export default Categories
