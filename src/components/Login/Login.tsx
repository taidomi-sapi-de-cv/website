import React, {FC} from 'react';
import Page from "../common/Page/Page";
import {Card, CardContent, CardHeader} from "@mui/material";


interface LoginProps {
}

const Login: FC<LoginProps> = () => (
    <div data-testid="Login">
        <Page>
            Login Component
            <Card>
                <CardHeader title={'Login'} subheader={'Subheader here'}/>
                <CardContent>
                    Algo aca
                </CardContent>
            </Card>
        </Page>
    </div>
);

export default Login;
