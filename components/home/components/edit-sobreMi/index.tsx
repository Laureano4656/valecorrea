import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import NavBarFooter from '../../../navbar-footer'
import GlobalInput from '../ui/input-global'
import save from '../../../../static/icons/SVG/save.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useForm } from '../../../../hooks/useForm'
import CheckIcon from '../../../icons/CheckIcon'
import TextHover from '../ui/input-global/TextHover'
import CrossIcon from '../../../icons/CrossIcon'
import ButtonPrimary from '../ui/button-primary'
import Book from '../../../icons/Book'
import Close from '../../../icons/Close'
import { BASE_URL, IMAGE_URL } from '../../../../helpers/env'
import axios from 'axios'
import Modal from '../ui/input-global/modal.tsx/modal'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const EditSobreMi: FunctionComponent = () => {
	const router = useRouter()
	const noteId = router?.query?.ID

	const [loading, setLoading] = useState(true)

	const [editorsHtml, setEditorsHtml] = useState({
		soy: '',
		conviccion: '',
		forjando: '',
		herramientas: '',
		hoy: ''
	})
	const handleEditorChange = (key: string, value: string) => {
		if (value !== editorsHtml[key]) {
			setEditorsHtml(prev => ({ ...prev, [key]: value }))
		}
	}

	useEffect(() => {
		setLoading(true)

		if (!noteId) return
		axios
			.get(`${BASE_URL}/notes/byId/${noteId}`)
			.then(response => {
				const data = response.data.comment
				// 1. Define la expresión regular para encontrar los títulos y párrafos
				const regex = /<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3[^>]*>|$)/g

				// 2. Usa matchAll para encontrar todas las coincidencias y conviértelo a un array
				const matches = Array.from(data.matchAll(regex))

				// 3. Crea un objeto para guardar los resultados limpios
				const extractedData = {}

				// 4. Recorre las coincidencias y arma el objeto
				for (const match of matches) {
					// El título está en el primer grupo de captura (match[1])
					// El párrafo está en el segundo grupo de captura (match[2])

					// .trim() limpia los espacios y saltos de línea al inicio y final
					const title = match[1].trim().toLowerCase().replace(' ', '_') // Clave limpia: "forjando_el_camino"
					const content = match[2].trim()

					// Asigna el contenido al objeto usando el título como clave
					extractedData[title] = content
				}
				console.log(extractedData)
				// Actualiza el estado con los valores extraídos o cadenas vacías si no se encuentran
				setEditorsHtml({
					soy: extractedData['soy'] || '',
					conviccion: extractedData['convicción'] || '',
					forjando: extractedData['forjando_el camino'] || '',
					herramientas: extractedData['herramientas'] || '',
					hoy: extractedData['hoy'] || ''
				})
				console.log(editorsHtml)
				setLoading(false)
			})
			.catch(error => {
				setLoading(false)
				console.log(error)
			})
	}, [noteId])
	const saveNote = () => {
		const editorsData = { ...editorsHtml }

		// Elimina las etiquetas <p> y </p> del inicio y final de cada sección
		for (const key in editorsData) {
			if (editorsData.hasOwnProperty(key)) {
				editorsData[key] = editorsData[key]
					.replace(/^<p>/, '')
					.replace(/<\/p>$/, '')
				// .replace(/<br\s*\/?>/g, '')
			}
		}

		// editorsData.soy = editorsData.soy.replace('<p>', '')
		// const lastIndex = editorsData.soy.lastIndexOf('</p>')
		// if (lastIndex !== -1) {
		// 	editorsData.soy =
		// 		editorsData.soy.substring(0, lastIndex) +
		// 		editorsData.soy.substring(lastIndex + 4)
		// }
		// editorsData.conviccion = editorsData.conviccion.replace('<p>', '')
		// const lastIndex2 = editorsData.conviccion.lastIndexOf('</p>')
		// if (lastIndex2 !== -1) {
		// 	editorsData.conviccion =
		// 		editorsData.conviccion.substring(0, lastIndex2) +
		// 		editorsData.conviccion.substring(lastIndex2 + 4)
		// }
		// editorsData.forjando = editorsData.forjando.replace('<p>', '')
		// const lastIndex3 = editorsData.forjando.lastIndexOf('</p>')
		// if (lastIndex3 !== -1) {
		// 	editorsData.forjando =
		// 		editorsData.forjando.substring(0, lastIndex3) +
		// 		editorsData.forjando.substring(lastIndex3 + 4)
		// }
		// editorsData.herramientas = editorsData.herramientas.replace('<p>', '')
		// const lastIndex4 = editorsData.herramientas.lastIndexOf('</p>')
		// if (lastIndex4 !== -1) {
		// 	editorsData.herramientas =
		// 		editorsData.herramientas.substring(0, lastIndex4) +
		// 		editorsData.herramientas.substring(lastIndex4 + 4)
		// }
		// editorsData.hoy = editorsData.hoy.replace('<p>', '')
		// const lastIndex5 = editorsData.hoy.lastIndexOf('</p>')
		// if (lastIndex5 !== -1) {
		// 	editorsData.hoy =
		// 		editorsData.hoy.substring(0, lastIndex5) +
		// 		editorsData.hoy.substring(lastIndex5 + 4)
		// }

		const formData = new FormData()
		formData.append('title', 'SOBRE_MI_RESERVED')
		formData.append('subTitle', '')
		formData.append('subCategory', '')
		formData.append('year', '2025')
		formData.append(
			'comment',
			`<h3>Soy</h3>${editorsData.soy}<h3>Convicción</h3>${editorsData.conviccion}<h3>Forjando el camino</h3>${editorsData.forjando}<h3>Herramientas</h3>${editorsData.herramientas}<h3>Hoy</h3>${editorsData.hoy}`
		)
		formData.append('category', '')
		formData.append('active', '0')
		formData.append('video', '')
		axios
			.put(`${BASE_URL}/notes/${router.query.ID}`, formData)
			.then(response => {
				router.push(`/sobre-mi`)
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<NavBarFooter>
			{!loading && (
				<div className='flex flex-col items-center justify-center sm:w-[55%] w-11/12 pt-6 sm:pt-0 h-full mx-auto my-[50px] sm:max-w-[66.5vw] gap-16 '>
					<h2 className='text-center text-subtitles'>Soy</h2>
					<div
						className='relative rounded-[4px] w-full text-black'
						style={{ height: 'auto' }}
					>
						<ReactQuill
							className='custom-quill'
							theme='snow'
							value={editorsHtml.soy}
							onChange={value => handleEditorChange('soy', value)}
						/>
					</div>
					<h2 className='text-center text-subtitles'>Conviccion</h2>
					<div
						className='relative rounded-[4px] w-full text-black'
						style={{ height: 'auto' }}
					>
						<ReactQuill
							className='custom-quill'
							theme='snow'
							value={editorsHtml.conviccion}
							onChange={value => handleEditorChange('conviccion', value)}
						/>
					</div>
					<h2 className='text-center text-subtitles'>Forjando el camino</h2>
					<div
						className='relative rounded-[4px] w-full text-black'
						style={{ height: 'auto' }}
					>
						<ReactQuill
							className='custom-quill'
							theme='snow'
							value={editorsHtml.forjando}
							onChange={value => handleEditorChange('forjando', value)}
						/>
					</div>
					<h2 className='text-center text-subtitles'>Herramientas</h2>
					<div
						className='relative rounded-[4px] w-full text-black'
						style={{ height: 'auto' }}
					>
						<ReactQuill
							className='custom-quill'
							theme='snow'
							value={editorsHtml.herramientas}
							onChange={value => handleEditorChange('herramientas', value)}
						/>
					</div>
					<h2 className='text-center text-subtitles'>Hoy</h2>
					<div
						className='relative rounded-[4px] w-full text-black'
						style={{ height: 'auto' }}
					>
						<ReactQuill
							className='custom-quill'
							theme='snow'
							value={editorsHtml.hoy}
							onChange={value => handleEditorChange('hoy', value)}
						/>
					</div>
					<div className='  sm:gap-[3.5vw] gap-7   flex  items-center justify-center '>
						{/* <button
              onClick={() => createNewNote(true)}
              className="relative cursor-pointer"
            >
              <div className="p-[15%] w-12 h-12 sm:w-[3vw] sm:h-[3vw] bg-black rounded-[100%] flex justify-center items-center">
                <CheckIcon color="#fff" size="90%" />
              </div>
              <TextHover title="publicar" />
            </button> */}

						<button
							onClick={() => saveNote()}
							className='relative '
						>
							<div className='p-[15%] w-12 h-12 sm:w-[3vw] sm:h-[3vw] bg-black rounded-[100%] flex justify-center items-center'>
								<Image
									src={save}
									alt='close'
									width={0}
									height={0}
									className='sm:w-[3vw] w-12 h-12'
								/>
							</div>
							<TextHover title='guardar' />
						</button>

						<button
							onClick={() => router.back()}
							className='relative '
						>
							<div className=' sm:w-[3vw] sm:h-[3vw]  p-[15%] w-12 h-12  bg-black rounded-[100%] flex justify-center items-center'>
								<Book
									size='90%'
									color='#fff'
								/>
							</div>
							<TextHover title='volver' />
						</button>
					</div>
				</div>
			)}
		</NavBarFooter>
	)
}

export default EditSobreMi
