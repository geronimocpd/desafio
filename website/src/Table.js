import * as React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from '@mui/material';
import axios from "axios";



export class DataGridReact extends React.Component {
    render() {
        const defaultMaterialTheme = createTheme();

        /*
        const [post, setPost] = React.useState(null);
        const baseURL = "http://localhost:9001/getclients";
        React.useEffect(() => {
            axios.get(baseURL).then((response) => {
                setPost(response.data);
            });
        }, []);

        if (!post) return null;*/


        return(
            <div style={{ width: '100%', height: '100%' }}>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <ThemeProvider theme={defaultMaterialTheme}>
                    <MaterialTable
                        columns={[
                            { title: 'Nome', field: 'nome' },
                            { title: 'Rua', field: 'rua' },
                            { title: 'Cidade', field: 'cidade' },
                            { title: 'Pais', field: 'pais' }
                        ]}
                        data={[
                            { nome: 'João', rua: 'Lima e Silva', cidade: 'Natal', pais: 'Brasil' },
                            { nome: 'Pedro', rua: 'Amintas Barros', cidade: 'Natal', pais: 'Brasil'},
                            { nome: 'Lucas', rua: 'José Estevão', cidade: 'Natal', pais: 'Brasil'}
                        ]}
                        title=""

                    />
                </ThemeProvider>
            </div>
        );
    }
}