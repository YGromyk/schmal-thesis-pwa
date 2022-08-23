import { Backdrop, CircularProgress } from "@mui/material";

export default function PageLoading(props) {
    return <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={props.open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    </>
}