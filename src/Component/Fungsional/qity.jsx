import React, { useReducer } from 'react';
import { Row, Container, Col, Card, CardImg, Button } from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContex';



//untuk deklarasi fungsi jumlah dan tambah
const initialState = {
    jumlah: 1,
    hargasatuan: 1000,
    hargatotal: 0,
    stock: 35

}

const reducer = (state, action) => {

    const countContext = useContext(keranjangContext)
    const [count, dispatch] = useReducer(reducer, initialState)
    const { value, setValue } = useContext(CartContext)

    switch (action.type) {
        case 'tambah': return {
            ...state,
            jumlah: state.jumlah + 1,
            hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
        }
        case 'kurangi': return {
            ...state,
            jumlah: state.jumlah - 1,
            hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
        }
        default:
            return state

    }
}


function HookReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const { value, setValue } = useContext(CartContext)

    return (
        <Container>
            <br />
            <Row>
                <Col xs="6">
                    <Card>
                        <span class="border">
                            <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                        </span>
                    </Card>

                </Col>
                <Col xs="6">
                    <h3>Realme 5 Pro{props.item}</h3>
                    
                    <h3>Rp.{countContext.keranjangState.hargatotal}</h3>
                    <br/>
                    <p><b>Jumlah :{countContext.keranjangState.jumlah}</b></p>
                    <Row>
                        <Col><Button onClick={() => countContext.keranjangispatch({ type: 'kurangi' })} color="danger">-</Button></Col>
                        <Col>{countContext.keranjangState.jumlah}</Col>
                        <Col><Button onClick={() =>countContext.keranjangdispatch({ type: 'tambah' })} color="primary">+</Button></Col>

                    </Row>
                    
                    <br />
                    <h5>Total Rp. {countContext.keranjangState.hargatotal}</h5>
                    <br />
                    <Button onClick={() => setValue(value + 1)} color="success" size="md" className="fa fa-cart-plus">Tambahkan Keranjang</Button>
                    <br/>
                    <hr/>
                    <Button color="danger">
                    <NavLink to="/tagihan">Tagihan </NavLink> 
                    </Button>
                   
                    <Container>

                        <br />

                        <h5 className="text-justify"><b>Deskripsi</b></h5>
                        <hr />
                        <p className="text-justify">and instance of type Instance.Instance is optional and is mixed by default.A class or function component with config Config may be used in places that expect</p>
                        <br />
                    </Container>
                </Col>

            </Row>
        </Container>

    );

}

export default HookReducer;