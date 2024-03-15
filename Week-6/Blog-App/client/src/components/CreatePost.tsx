import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FileBase64 from 'react-file-base64';
import { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

const CreatePost = () =>{
    const [post, setPost] = useState({
        tittle: "",
        description:"",
        image:"",
        tags:" "
    })

    const handleInput = (e: any) =>{
        const {name, value} = e.target;
        setPost((prev) =>{
            return{
                ...prev,
                [name] : value,
            }
        })
    }

    const handleSubmit = (e: any) =>{
        e.preventDefault();
        console.log(post);
        
    }
    return <Container>
        <h2 className = "display-3 text-center">Create Post</h2>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Tittle</Form.Label>
        <Form.Control type="text" placeholder="Enter the Tittle"
          name="tittle" value={post.tittle}
          onChange={handleInput}/>

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Description </Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter the Description"
         name="description" value={post.description} onChange={handleInput}/>
      </Form.Group>    

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control></Form.Control>
        <FileBase64 type="file"  onDone={({base64} : any ) =>{
                        setPost((prev)=>{
                            return{
                                ...prev,
                                image: base64,
                            }
                        })
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Tags (seprated by comma) </Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter the Tags" 
        name="tags" value={post.tags}        
        onChange={(e:any) =>{
            setPost((prev) =>{
                return{
                    ...prev, 
                    [e.target.name]: e.target.value.split(",")
                }
            })
        }

        }
        />
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit} >Create Post</Button>{" "}
      <Button variant="secondary">Cancle</Button>{" "}
    </Form>

    </Container>
      
}
export default CreatePost;