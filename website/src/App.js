import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    SkeletonText,
    Text,
} from '@chakra-ui/react'
import {FaLocationArrow, FaTimes} from 'react-icons/fa'

import {MDBDataTable} from 'mdbreact';

import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
} from '@react-google-maps/api'
import {useRef, useState} from 'react'

const center = {lat: -5.806444, lng: -35.213871,}
const data = {
    columns: [
        {
            label: 'Nome',
            field: 'name',
            sort: 'asc',
        },
        {
            label: 'Peso',
            field: 'position',
            sort: 'asc',
            width: 270
        },
        {
            label: 'Endereco',
            field: 'office',
            sort: 'asc',
            width: 200
        },
        {
            label: 'Age',
            field: 'age',
            sort: 'asc',
            width: 100
        },
        {
            label: 'Data',
            field: 'date',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Média',
            field: 'salary',
            sort: 'asc',
            width: 100
        }
    ],
    rows: [
        {
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320'
        },
        {
            name: 'Garrett Winters',
            position: 'Accountant',
            office: 'Tokyo',
            age: '63',
            date: '2011/07/25',
            salary: '$170'
        },
        {
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
            age: '66',
            date: '2009/01/12',
            salary: '$86'
        },
        {
            name: 'Cedric Kelly',
            position: 'Senior Javascript Developer',
            office: 'Edinburgh',
            age: '22',
            date: '2012/03/29',
            salary: '$433'
        },
        {
            name: 'Zorita Serrano',
            position: 'Software Engineer',
            office: 'San Francisco',
            age: '56',
            date: '2012/06/01',
            salary: '$115'
        },
        {
            name: 'Jennifer Acosta',
            position: 'Junior Javascript Developer',
            office: 'Edinburgh',
            age: '43',
            date: '2013/02/01',
            salary: '$75'
        },
        {
            name: 'Cara Stevens',
            position: 'Sales Assistant',
            office: 'New York',
            age: '46',
            date: '2011/12/06',
            salary: '$145'
        },
        {
            name: 'Hermione Butler',
            position: 'Regional Director',
            office: 'London',
            age: '47',
            date: '2011/03/21',
            salary: '$356'
        },
        {
            name: 'Lael Greer',
            position: 'Systems Administrator',
            office: 'London',
            age: '21',
            date: '2009/02/27',
            salary: '$103'
        },
        {
            name: 'Jonas Alexander',
            position: 'Developer',
            office: 'San Francisco',
            age: '30',
            date: '2010/07/14',
            salary: '$86'
        },
        {
            name: 'Shad Decker',
            position: 'Regional Director',
            office: 'Edinburgh',
            age: '51',
            date: '2008/11/13',
            salary: '$183'
        },
        {
            name: 'Michael Bruce',
            position: 'Javascript Developer',
            office: 'Singapore',
            age: '29',
            date: '2011/06/27',
            salary: '$183'
        },
        {
            name: 'Donna Snider',
            position: 'Customer Support',
            office: 'New York',
            age: '27',
            date: '2011/01/25',
            salary: '$112'
        }

    ]
}


function App() {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })

    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()

    if (!isLoaded) {
        return <SkeletonText/>
    }


    async function addMarker() {


        console.log(originRef);
        /*if (originRef.current.value === '' ) {
            return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current.value
        })
        setDirectionsResponse(results)*/
    }

    function clearRoute() {
        setDirectionsResponse(null)
        originRef.current.value = ''
    }

    return (
        <Flex
            position='relative'
            flexDirection='column'
            alignItems='center'
            h='100vh'
            w='100vw'
        >
            <Box position='absolute' left={0} top={0} h='100%' w='100%'>
                {/* Google Map Box */}
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{width: '100%', height: '100%'}}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    onLoad={map => setMap(map)}
                >
                    <Marker position={center}/>
                </GoogleMap>
            </Box>
            <Box
                p={4}
                borderRadius='lg'
                m={4}
                bgColor='white'
                shadow='base'
                minW='40%'
                zIndex='1'
                width='40%'
            >
                <HStack spacing={1} justifyContent='space-between'>

                    <Box flexGrow={1}>

                        <Input type='text' placeholder='Nome Cliente'/>
                        <Input type='text' placeholder='Peso Entrega'/>
                        <Autocomplete>
                            <Input type='text' placeholder='Endereço' ref={originRef}/>
                        </Autocomplete>
                    </Box>

                    <ButtonGroup>
                        <Button colorScheme='pink' type='submit' onClick={addMarker}>
                            Adicionar
                        </Button>
                        <IconButton
                            aria-label='center back'
                            icon={<FaTimes/>}
                            onClick={clearRoute}
                        />
                    </ButtonGroup>
                </HStack>
            </Box>
            <Box
                p={4}
                borderRadius='lg'
                m={4}
                bgColor='white'
                shadow='base'
                minW='80%'
                zIndex='1'
            >
            <MDBDataTable
                striped
                dark
                entries={5}
                data={data}
            />
            </Box>
        </Flex>
    )
}

export default App