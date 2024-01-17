import { Stack, Button } from "@mui/material"

export const MuiButton = () => {
    return (

        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant="text">text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlines">Outlined</Button>
            </Stack>

            {/* ROUGE STACK CONTAINED */}
            <Stack spacing={2} direction='row'>
                <Button variant="contained" color="primary">primary</Button>
                <Button variant="contained" color="secondary">secondary</Button>
                <Button variant="contained" color="error">error</Button>
                <Button variant="contained" color="success">success</Button>
                <Button variant="contained" color="info">info</Button>
                <Button variant="contained" color="warning">warning</Button>
            </Stack>


            {/* ROUGE STACK TEXT */}
            <Stack spacing={2} direction='row'>
                <Button variant="text" color="primary">primary</Button>
                <Button variant="text" color="secondary">secondary</Button>
                <Button variant="text" color="error">error</Button>
                <Button variant="text" color="success">success</Button>
                <Button variant="text" color="info">info</Button>
                <Button variant="text" color="warning">warning</Button>
            </Stack>



            {/* ROUGE STACK CONTAINED */}
            <Stack spacing={2} direction='row'>
                <Button variant="outlines" color="primary">primary</Button>
                <Button variant="outlines" color="secondary">secondary</Button>
                <Button variant="outlines" color="error">error</Button>
                <Button variant="outlines" color="success">success</Button>
                <Button variant="outlines" color="info">info</Button>
                <Button variant="outlines" color="warning">warning</Button>
            </Stack>
        </Stack>
    )
}
