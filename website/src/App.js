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
import {DataGridReact} from './Table.js'
import axios from "axios";

import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
} from '@react-google-maps/api'
import {useRef, useState} from 'react'
import * as React from "react";
const center = {lat: -5.806444, lng: -35.213871,}




function App() {
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })


    if (!isLoaded) {
        return <SkeletonText/>
    }


    async function addMarker() {

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
                <DataGridReact/>

            </Box>
        </Flex>
    )
}

export default App