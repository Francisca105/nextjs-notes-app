import { Skeleton } from "@mui/material";

export default function LoadingPage() {
    return (
        <div>
            <Skeleton variant="rectangular" width={225} height={24} />
            <br></br>
            <Skeleton variant="rectangular" width={194} height={32} />
            <br></br>
            <Skeleton variant="rectangular" width={194} height={112} />
            <br></br>
            <Skeleton variant="rectangular" width={112} height={36} />
        </div>
    );
}