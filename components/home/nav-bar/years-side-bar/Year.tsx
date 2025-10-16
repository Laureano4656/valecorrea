/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './styles/years-side-bar.module.css'
import useCategoryYear from '../../../utils/useCategoryYear'

import close from '../../../../static/icons/SVG/close.svg'
import arrow from '../../../../static/icons/SVG/arrow.svg'
import trash from '../../../../static/icons/SVG/trash.svg'
import { useRouter } from 'next/router'
import useCategoryStore from '../../../utils/useCategoryStore'
import useCreateNote from '../../../utils/useCreateNote'
import useAllCategories from '../../../../hooks/useAllCategories'
import useUserLogin, {
	useUserLoginWithStorage
} from '../../../utils/useAllCategoriesStore'
import Modal from '../../components/ui/input-global/modal.tsx/modal'

import Image from 'next/image'

interface Category {
	categorie: string
	comment: string
	id: number
	title: string
	year: number
}

interface Props {
	categories: Category[]
}

const Year: FunctionComponent<Props> = ({ categories }) => {
	const router = useRouter()
	const { selectedYear, setSelectedYear } = useCategoryYear()
	const { selectedCategory } = useCategoryStore()
	const { userLogin } = useUserLoginWithStorage()
	const [openModal, setOpenModal] = useState(false)
	const [yearDelete, setYearDelete] = useState(0)
	const { setCreateNote } = useCreateNote()

	const { setAllCategories, allCategories } = useAllCategories()
	const [dataCategory, setDataCategory] = useState(0)

	const categoriesYear = categories.map(e => {
		return e.year
	})

	const yearList = []

	categoriesYear.forEach(elemento => {
		if (!yearList.includes(elemento)) {
			yearList.push(elemento)
		}
	})

	const uniqueYears = Array.from(categories).findLast(e => e.year)

	const yearsArray = uniqueYears

	useEffect(() => {
		setSelectedYear(yearsArray && yearsArray.year)
	}, [categories])

	const createNewYear = (year: number) => {
		setCreateNote({
			year: year,
			category: router.asPath.replace('/', ''),
			subCategory: selectedCategory
		})
		router.push(`/create`)
	}

	return (
		<>
			<ul
				className={`z-10 font-playfair min-h-[100px] max-w-[250px] flex gap-[2.5vw] flex-col items-start absolute sm:left-[-30%] left-[12%] -translate-x-1/2 sm:translate-x-0 sm:top-0 -top-8 `}
			>
				{yearList.length > 0 &&
					yearList
						.sort((a, b) => b - a)
						.map((year, index) => (
							<>
								<li
									key={index}
									className={`z-50 ${
										selectedYear === year ? styles.yearsActive : styles.years
									}`}
									onClick={() => setSelectedYear(year)}
								>
									<p className='relative w-max '>{year}</p>
								</li>
							</>
						))}
			</ul>
		</>
	)
}

export default Year
