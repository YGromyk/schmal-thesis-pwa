import { Alert } from "@mui/material";

export default function ErrorAlert(props) {
    console.log(props);
    const error = props.error;
    if (error) {
        return <Alert severity="error">{error.description}</Alert>;
    }
}