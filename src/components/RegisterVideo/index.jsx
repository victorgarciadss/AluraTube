import { useState } from "react";
import { StyledRegisterVideo } from "./styles"

import { createClient } from "@supabase/supabase-js";

const useForm = (props) => {

    const [values, setValues] = useState(props.initialValues);

    return {
        values,

        handleChange: (e) => {

            const value = e.target.value;
            const name = e.target.name;
            
            setValues({
                ...values,
                [name]: value,
            });

        },
        clearForm(){
            setValues({});
        }
    };
}

const PROJECT_URL = "https://xqnaeuldjbigudgzxiyi.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxbmFldWxkamJpZ3VkZ3p4aXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMjc3NjMsImV4cCI6MTk4MzgwMzc2M30.e9I1HTctGxCgtuJ5h2Yd-ssLG-i3or3WEx4qVFmD9Jw"

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);




const getThumbnail = (url) => {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

const RegisterVideo = () => {

    const [formVisible, setFormVisible] = useState(false);

    const registerForm = useForm({
        initialValues: {
            title: "",
            url: "",
            playlist: "",
        }
    });
    

    return(
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisible(true)}>
                +
            </button>

            {formVisible ? (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    // console.log(registerForm.values);

                    // Conexão Front e Back-End
                    supabase.from("videos").insert({
                        title: registerForm.values.title,
                        url: registerForm.values.url,
                        thumb: getThumbnail(registerForm.values.url),
                        playlist: registerForm.values.playlist,
                    })
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    })

                    setFormVisible(false);
                    registerForm.clearForm();
                }}>

                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisible(false)}>
                            X
                        </button>

                        <input
                            type="text"
                            name="title"
                            placeholder="Título do video"
                            value={registerForm.values.title}
                            onChange={registerForm.handleChange}
                        />

                        <input
                            type="text"
                            name="url"
                            placeholder="URL do video"
                            value={registerForm.values.url}
                            onChange={registerForm.handleChange}
                        />

                        <input
                            type="text"
                            name="playlist"
                            placeholder="Playlist do video"
                            value={registerForm.values.playlist}
                            onChange={registerForm.handleChange}
                             />

                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>

                </form>
            )
            : null}

            
            
        </StyledRegisterVideo>
    )
    
}


export default RegisterVideo;