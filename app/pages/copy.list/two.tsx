import { DataLabel } from '../components/style.label.data'
import { IconsStyle } from '../components/styles.icons'
import { gradient } from '../components/@types'
import { CircleContainer } from '../components/container.circle'
import { BiArrowBack, BiCheckCircle, BiCircle, BiTransferAlt, BiArrowFromLeft } from "react-icons/bi"
import { GiCash } from "react-icons/gi"
import { IoMdCash } from "react-icons/io"



const list= [
    { name : 'la que se avecina',
      len: 18,
      size: '3GB'},
]


export default function Page () {
    return (
        <div className='relative h-screen w-screen px-3 space-y-4 overflow-scroll'>
            <div className='sticky top-0 bg-body pt-3 flex justify-between items-center w-full h-14 border-b-4 border-back'>
                <IconsStyle.Component Component={BiArrowBack} size='xl'/>
                <DataLabel.Component size='xl'>Confirmacion de Pedido</DataLabel.Component>
                <div className='flex space-x-2 items-center h-full'></div>
            </div>


            <div className={`flex flex-col space-y-2 items-center  justify-start  w-full border-b-8 border-back`}>
                <DataLabel.Component size='base'>Datos del Pedido:</DataLabel.Component>
                <div className='w-full border-b-4 p-2 border-back space-x-1'>
                    <DataLabel.Component size='sm'>Nombre de Cliente:</DataLabel.Component>
                    <DataLabel.Component size='sm' className={DataLabel.italicCompose('')}>Nombre de quien recibira el pedido</DataLabel.Component>
                    <DataLabel.Component size='sm' className={DataLabel.compose('text-red-500', '', '')}>*</DataLabel.Component>

                </div>
                <div className='w-full border-b-4 p-2 border-back space-x-1'>
                    <DataLabel.Component size='sm'>Numero de Telefono:</DataLabel.Component>
                    <DataLabel.Component size='sm' className={DataLabel.italicCompose('')}>Movil para llamar al llegar </DataLabel.Component>
                    <DataLabel.Component size='sm' className={DataLabel.compose('text-red-500', '', '')}>*</DataLabel.Component>
                </div>
                <div className='w-full border-b-4 p-2 border-back space-x-1'>
                    <DataLabel.Component size='sm'>Ubicacion:</DataLabel.Component>
                    <DataLabel.Component size='sm' className={DataLabel.italicCompose('')}>Toque para anadir ubicacion </DataLabel.Component>
                    <DataLabel.Component size='sm' className={DataLabel.compose('text-red-500', '', '')}>*</DataLabel.Component>
                </div>
            </div>


            <div className={`flex flex-col space-y-2 items-center  justify-start  w-full border-b-8 border-back`}>
                <DataLabel.Component size='base'>Metodo de Envio:</DataLabel.Component>
                
                <div className='flex flex-grow items-center w-full border-b-4 p-2 border-back '>
                    <div className='flex flex-col h-full w-full space-y-1'>
                        <DataLabel.Component size='sm'>Envio Estandar:</DataLabel.Component>
                        <div className='h-full w-full space-x-1 '>
                        <DataLabel.Component size='sm' className={DataLabel.italicCompose('')}>
                            0.00 MN Los pedidos realizados con este metodo, seran recividos el dia de MANANA en el horario de 
                        </DataLabel.Component>
                        <DataLabel.Component size='sm' className={DataLabel.italicCompose('text-red-500 underline', '', '')}>6:00-7:00</DataLabel.Component>
                        </div>
                    </div>
                    <div className='flex justify-center items-center h-full w-1/6'>
                        <IconsStyle.Component Component={BiCheckCircle} size='3xl'/>
                    </div>
                </div>
                <div className='flex flex-grow items-center w-full border-b-4 p-2 border-back '>
                    <div className='flex flex-col h-full w-full space-y-1'>
                        <DataLabel.Component size='sm'>Envio Express:</DataLabel.Component>
                        <div className='h-full w-full space-x-1 '>
                        <DataLabel.Component size='sm' className={DataLabel.italicCompose('')}>
                            50.00 MN Los pedidos realizados con este metodo, seran recividos el dia de HOY en el horario de 
                        </DataLabel.Component>
                        <DataLabel.Component size='sm' className={DataLabel.italicCompose('text-red-500 underline', '', '')}>6:00-7:00</DataLabel.Component>
                        </div>
                    </div>
                    <div className='flex justify-center items-center h-full w-1/6'>
                        <IconsStyle.Component Component={BiCircle} size='3xl'/>
                    </div>
                </div>
                <DataLabel.Component size='xs' className={DataLabel.italicCompose('px-2 pb-2 tracking-wide')}>
                    Nota: Si desea cambiar la hora de entrega toque sobre la misma, que se encuentra senalada y de color rojo 
                </DataLabel.Component>
            </div>



            <div className={`flex flex-col space-y-2 items-center  justify-start  w-full border-b-8 border-back`}>
                <DataLabel.Component size='base'>Forma De Pago:</DataLabel.Component>
                <div className='flex w-full justify-around pb-3 pt-2'>
                    <div className='flex flex-col space-y-1 justify-center items-center'>
                        <CircleContainer.ActificialBorder size='16' width={2}>
                            <IconsStyle.Component Component={GiCash} size='4xl'/>
                        </CircleContainer.ActificialBorder>
                        <DataLabel.Component size='sm'>En Efectivo</DataLabel.Component>
                    </div>
                    <div className='flex flex-col space-y-1 justify-center items-center'>
                        <CircleContainer.ActificialBorder size='16' width={2} border='bg-gray-100 bg-opacity-25'>
                            <IconsStyle.Component Component={BiTransferAlt} size='4xl' />
                        </CircleContainer.ActificialBorder>
                        <DataLabel.Component size='sm'>Transferencia</DataLabel.Component>
                    </div>
                </div>
            </div>



            <div className={`flex flex-col space-y-2 items-center  justify-start  w-full border-b-8 border-back`}>
                <div className='flex justify-between items-center w-full border-b-4 p-2 border-back space-x-1'>
                    <DataLabel.Component size='sm'>Cupon Descuento:</DataLabel.Component>
                    <div className='flex space-x-4'>
                        <DataLabel.Component size='sm'>-0.00 MN</DataLabel.Component>
                        <IconsStyle.Component Component={BiArrowFromLeft} size='xl' />
                    </div>
                </div>
                <div className='flex justify-between items-center w-full border-b-4 p-2 border-back space-x-1'>
                    <DataLabel.Component size='sm'>Cartera:</DataLabel.Component>
                    <div className='flex space-x-4'>
                        <DataLabel.Component size='sm'>-0.00 MN</DataLabel.Component>
                        <IconsStyle.Component Component={BiArrowFromLeft} size='xl' />
                    </div>
                </div>
                <div className='flex justify-between items-center w-full border-b-4 p-2 border-back space-x-1'>
                    <DataLabel.Component size='sm'>Puntos:</DataLabel.Component>
                    <div className='flex space-x-4'>
                        <DataLabel.Component size='sm'>-0.00 MN</DataLabel.Component>
                        <IconsStyle.Component Component={BiArrowFromLeft} size='xl' />
                    </div>
                </div>
                <div className='flex justify-between items-center w-full border-b-4 p-2 border-back space-x-1'>
                    <DataLabel.Component size='sm'>Tarjeta Regalo:</DataLabel.Component>
                    <div className='flex space-x-4'>
                        <DataLabel.Component size='sm'>-0.00 MN</DataLabel.Component>
                        <IconsStyle.Component Component={BiArrowFromLeft} size='xl' />
                    </div>
                </div>
               
            </div>

            <div className={`flex flex-col space-y-2 items-center  justify-start  w-full border-b-8 border-back`}>
                <DataLabel.Component size='base'>Cuenta:</DataLabel.Component>
                <div className='flex justify-between items-center w-full border-b-4 p-2 border-back space-x-1'>
                    <DataLabel.Component size='sm'>Pedido Total:</DataLabel.Component>
                    <DataLabel.Component size='sm'>75.00 MN</DataLabel.Component>
                </div>
                <div className='flex justify-between items-center w-full border-b-4 p-2 border-back space-x-1'>
                    <DataLabel.Component size='sm'>Descuento Total:</DataLabel.Component>
                    <DataLabel.Component size='sm'>-25.00 MN</DataLabel.Component>
                
                </div>
                <div className='flex justify-between items-center w-full border-b-4 p-2 border-back space-x-1'>
                    <DataLabel.Component size='sm'>Envio:</DataLabel.Component>
                    <DataLabel.Component size='sm'>50.00 MN</DataLabel.Component>
                </div>
               
            </div>


            <div className='sticky absolute bottom-0 left-0 h-1/6 w-full p-3 bg-body'>
                <div className='flex flex-col justify-center items-center h-full w-full border-t-4 border-back'>
                    <div className='flex justify-around h-1/3 w-full'>
                        <DataLabel.Component size='base'>Total: 123 GB</DataLabel.Component>
                        <DataLabel.Component size='base'>Precio: 75 MN</DataLabel.Component>
                    </div>
                    <div className={`${gradient} flex justify-center items-center h-1/3 w-11/12`}>
                        <DataLabel.Component className={DataLabel.compose('tracking-widest font-extrabold', 'body','')} size='lg'>Realizar Pedido</DataLabel.Component>
                    </div>
                </div>
            </div>
        </div>
    )
}