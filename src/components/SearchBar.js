import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import SearchResults from './SearchResults';
import Container from 'react-bootstrap/esm/Container';


const SearchBar = () => {
    let [urls, setUrls] = useState([])
    const { register, handleSubmit, formState: {errors} } = useForm();

    const GetShortCode = (address) => {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${address}`)
            .then((res) => {
                let urlAdd = [...urls, {shortLink: res.data.result.full_short_link, originalLink: res.data.result.original_link}]
                setUrls(urlAdd)
                return res.data.result;
            })  
    }
    
    const onSubmit = (data) => {
        GetShortCode(data.siteUrl);
        var searchItem = document.getElementById('searchItem');
        searchItem.value = '';
    };
    

    return (
        <>
        <Container className="forms">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col sm={12} md={9}>
                        <Form.Control {...register("siteUrl", { required: true})} id="searchItem" type="text" placeholder="Shorten a link here..." />
                        {errors.siteUrl && <span>Please add a link</span>}
                    </Col>
                    <Col sm={12} md={3}>
                        <Form.Control type="submit" className="custom-btn" placeholder="Shorten it!"/>
                    </Col>
                </Row>
            </Form>
            <SearchResults urlsData={urls}/>
        </Container>
        </>
    )
}

export default SearchBar;