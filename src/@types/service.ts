import { string, number, boolean, array, object } from './guards'


// {
//     "id": "e66922f2-3d32-49ce-843f-8982f2ff4ef8",
//     "name": "Refined Metal Salad",
//     "description": "Polarised uniform model Try to generate the FTP bus, maybe it will bypass the optical driver!",
//     "enabled": false,
//     "versions": [
//         {
//         "id": "45d0d783-33a7-426f-bdb1-81850672111e",
//         "name": "Kids",
//         "description": "Pakistan green"
//         },
//         {
//         "id": "e4ea6384-f8ec-4f2a-8193-6ddb423ae117",
//         "name": "Garden",
//         "description": "Orchestrator"
//         },
//         {
//         "id": "1cc0024a-bb66-4cf1-a952-3338e23c505b",
//         "name": "Industrial",
//         "description": "Ohio"
//         }
//     ]
// }

// We are creating this with the assumption that these are all of the available properties for EVERY endpoint that presents us a Service object
export const ServiceVersion = object({
    id: string,
    name: string,
    description: string,
    // breaks: boolean
})

export const ServiceVersions = array(ServiceVersion)
export type ServiceVersion = ReturnType<typeof ServiceVersion>
export type ServiceVersions = ReturnType<typeof ServiceVersions>

// We are creating this with the assumption that these are all of the available properties for EVERY endpoint that presents us a Service object
export const Service = object({
    id: string,
    name: string,
    description: string,
    // breaks: boolean,
    enabled: boolean,
    versions: array(ServiceVersion)
})

export const Services = array(Service)
export type Service = ReturnType<typeof Service>
export type Services = ReturnType<typeof Services>
  