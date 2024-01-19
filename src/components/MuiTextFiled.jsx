import { Stack , TextField } from "@mui/material"
import "../App.css"

export const MuiTextFiled = () => {
    return (
        
            <Stack spacing={4}>
                <Stack className="hello-world" direction="row" spacing={2}>
                    <TextField label="Name" variant="outlined"/>
                    <TextField label="Name" variant="filled"/>
                    <TextField label="Name" variant="standard"/>
                </Stack>

                <Stack>
                    <TextField label="small Secondary" size="small" color="secondary"/>
                </Stack>
            </Stack>
        
    )
}
