import React, { useState, useEffect, use } from 'react'
import styles from './styles/years-side-bar.module.css'
import Categories from './Categories'
import { useRouter } from 'next/router'
import axios from 'axios'
import { BASE_URL } from '../../../../helpers/env'
import Year from './Year'
import { useSubcategory } from '../../../../store/useSubcategory'
import { useUserLoginWithStorage } from '../../../utils/useAllCategoriesStore'
import ButtonAddNote from '../../components/ui/button-add-note'

const YearSideBar: React.FC = () => {
	const [categories, setCategories] = useState([])
	const { selectedSubcategory } = useSubcategory()
	const { userLogin } = useUserLoginWithStorage()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const router = useRouter()

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				setLoading(true)
				setError(null)
				let response
				if (router.asPath && selectedSubcategory) {
					console.log(userLogin)
					if (userLogin) {
						response = await axios.get(
							`${BASE_URL}/notes/all/${router.asPath.replace(
								'/',
								''
							)}/${selectedSubcategory}`
						)
					} else {
						response = await axios.get(
							`${BASE_URL}/notes/public/${router.asPath.replace(
								'/',
								''
							)}/${selectedSubcategory}`
						)
					}
					setCategories(response.data)
				}
			} catch (err) {
				console.error('Error fetching categories', err)
				setError('Hubo un problema al cargar las notas')
			} finally {
				setLoading(false)
			}
		}

		fetchCategories()
	}, [userLogin, router.asPath, selectedSubcategory])

	useEffect(() => {
		router.replace(router.asPath)
	}, [userLogin, router.asPath])

	return (
		<div className={styles.yearsSideBar}>
			<div className='relative sm:w-[49vw] ml-[8vw] mt-12'>
				{userLogin && (
					<div className='hidden sm:block'>
						<ButtonAddNote />
					</div>
				)}
				{loading ? (
					'Cargando notas'
				) : error ? (
					<p>{error}</p>
				) : categories.length > 0 ? (
					<>
						<Categories categories={categories} />
						<Year categories={categories} />{' '}
					</>
				) : (
					<p className='pt-4'>En este momento no hay notas en esta sección</p>
				)}
			</div>
		</div>
	)
}

export default YearSideBar
