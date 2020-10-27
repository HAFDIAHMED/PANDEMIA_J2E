import React from 'react';
import './Addproduct.css';
import { Container, Image, AccordionCollapse} from 'react-bootstrap';
import { Row,Col,Card,CardDeck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';
import axios from "axios";
import { Link} from'react-router-dom';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';


class Addmagazin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name : '' ,type : '' , ot : '', ct : '', city : '' ,adress : '' ,tel : '' ,  headers_user : {} };
    }
    componentWillMount() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.accessToken) {
          this.state.headers_user = { Authorization: 'Bearer ' + user.accessToken };
      } else {
         this.props.history.push(`/`);
         return ;
      }
  	}
    onChange(e) {this.setState({[e.target.name] : e.target.value});}

    onSubmit(e) {
      e.preventDefault();
      axios.post("http://localhost:8080/api/type_magazin/add",{type_magazin:this.state.type},{ headers: this.state.headers_user} )
           .then(response => {
             const user = JSON.parse(localStorage.getItem('user'));
             let data = {user:user.id,
                  	 type:response.data.id,
                  	 label:this.state.name,
                  	 address:this.state.adress,
                  	 ville:this.state.city,
                  	 debut:this.state.ot,
                  	 fin:this.state.ct,
                  	 telephones:[this.state.tel]};
             axios.post("http://localhost:8080/api/magazin/add",data,{ headers: this.state.headers_user} )
                  .then(response => {this.props.history.push(`/magazin`);return;});
           });
    }
    render() {
      let cities = [
          'Casablanca',
          'Fez',
          'Tangier',
          'Salé',
          'Rabat',
          'Oujda',
          'Kenitra',
          'Agadir',
          'Tetouan',
          'Temara',
          'Safi',
          'Mohammedia',
          'Khouribga',
          'El Jadida',
          'Beni Mellal',
          'Aït Melloul	',
          'Nador	',
          'Dar Bouazza	',
          'Taza',
          'Settat',
          'Berrechid',
          'Khemisset',
          'Inezgane',
          'Ksar El Kebir',
          'Larache',
          'Guelmim',
          'Khenifra',
          'Berkane',
          'Taourirt',
          'Bouskoura',
          'Fquih Ben Salah	',
          'Dcheira El Jihadia',
          'Oued Zem',
          'El Kelaa Des Sraghna',
          'Sidi Slimane',
          'Errachidia',
          'Guercif',
          'Oulad Teima',
          'Ben Guerir',
          'Tifelt',
          'Lqliaa',
          'Taroudant',
          'Sefrou',
          'Essaouira',
          'Fnideq',
          'Sidi Kacem	',
          'Tiznit',
          'Tan-Tan',
          'Ouarzazate',
          'Souk El Arbaa',
          'Youssoufia',
          'Lahraouyine',
          'Martil',
          'Ain Harrouda',
          'Suq as-Sabt Awlad an-Nama',
          'Skhirat',
          'Ouazzane',
          'Benslimane',
          'Al Hoceima',
          'Beni Ansar',
          'M\'diq',
          'Sidi Bennour',
          'Midelt',
          'Azrou',
          'Drargua'];
      let cities_line = cities.map((element)=>{return <option value={element}>{element}</option>});
      return (
          <div class="Home">
           <div class="intro">
                <Image src={require('./img/essentials/storef.png')} className="header-image" />
            </div>
            <div className="p-fluid">
                <h1>FILL IN THE FORM</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                  <Container>
                    <Row>
                      <Col>
                        <input type="text" id="InputName"  name="name" placeholder="Enter Name of Magazin" value={this.state.name} onChange={this.onChange.bind(this)} />
                      </Col>
                      <Col>
                        <input type="text" id="InputType"  name="type" placeholder="Enter type" value={this.state.type} onChange={this.onChange.bind(this)} />
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                      <Col>
                        <input type="text" id="InputAdress"  name="adress" placeholder="Enter Adress of Magazin" value={this.state.adress} onChange={this.onChange.bind(this)} />
                      </Col>
                      <Col>
                        <input type="text" id="InputTelephone"  name="tel" placeholder="Enter Telephone of Magazin" value={this.state.tel} onChange={this.onChange.bind(this)} />
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                      <Col>
                        <input type="text" id="InputOt"  name="ot" placeholder="Enter Opening Time 00:00:00" value={this.state.ot} onChange={this.onChange.bind(this)} />
                      </Col>
                      <Col>
                      <input type="text" id="InputCt"  name="ct" placeholder="Enter Closing Time 00:00:00" value={this.state.ct} onChange={this.onChange.bind(this)} />
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                      <Col>
                      <select name="city" id="city" value={this.state.city} onChange={this.onChange.bind(this)}>
                        {cities_line}
                      </select>
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col><button type="submit">Add Magazin</button></Col>
                    </Row>
                  </Container>
      					</form>

            </div>

    </div>
  );}
}
export default Addmagazin;
