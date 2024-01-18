import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

import { useState } from "react";

export const MuiButton = () => {

    const [formats, setFormats] = useState([]);



    const handleFormatChange = (_event, updatedFormats) => {


        setFormats(updatedFormats);

        console.log(formats)



    }





    return (

        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant="text">text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlines">Outlined</Button>
            </Stack>


            <Stack display="block" spacing={2} direction="row">
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">medium</Button>
                <Button variant="contained" size="large">large</Button>
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
                <Button variant="outlines" color="warning" >warning</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained" startIcon={<SendIcon />} disableElevation>Sent</Button>
                <Button variant="contained" endIcon={<SendIcon />} disableRipple>Sent</Button>

                <IconButton aria-label="send" size="small" color="warning">
                    <SendIcon />
                </IconButton>




                {/* VIDEO 5 */}
                <Stack direction="row">
                    <ButtonGroup variant="contained" orientation="vertical" size="large" color="secondary">
                        <Button>Left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>



                <Stack direction="column" >
                    <ToggleButtonGroup value={formats} size="large" color="warning" orientation="vertical" onChange={handleFormatChange}>
                        <ToggleButton value="italic" ><FormatItalicIcon /></ToggleButton>
                        <ToggleButton value="bold" ><FormatBoldIcon /></ToggleButton>
                        <ToggleButton value="underlined" ><FormatUnderlinedIcon /></ToggleButton>
                    </ToggleButtonGroup>

                </Stack>
            </Stack>
        </Stack>
    )
}
