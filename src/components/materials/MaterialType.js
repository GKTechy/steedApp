import React, { Component } from 'react'


export class MaterialType extends Component {

    

    constructor(props) {
        super(props)
    
        this.state = {
             uomList:[
                {
                    "code": "B15","desc": "BAG 15"
                },{
                    "code": "B25",            "desc": "BAG 25"
                },{
                    "code": "B50",            "desc": "BAG 50"
                },{
                    "code": "BBL",            "desc": "Barrel - Liquid Measure"
                },{
                    "code": "BOX",            "desc": "Box"
                },{
                    "code": "BRL",            "desc": "BARREL"
                },{
                    "code": "BSD",            "desc": "Bushel - Dry Measure"
                },{
                    "code": "CAN",            "desc": "CAN"
                },{
                    "code": "CCM",            "desc": "Cubic Centimeters"
                },{
                    "code": "CDM",            "desc": "Cubic Decimeters"
                },{
                    "code": "CG",            "desc": "Centigrams"
                },{
                    "code": "CHN",           "desc": "Chain"
                },{
                    "code": "CL",            "desc": "Centiliters"
                },{
                    "code": "CM",            "desc": "Centimeters"
                },{
                    "code": "CMM",            "desc": "Cubic Millimeters"
                },{
                    "code": "CRT",            "desc": "CRATE"
                },{
                    "code": "CS",            "desc": "Case"
                },{
                    "code": "CUF",            "desc": "Cubic Feet"
                },{
                    "code": "CUI",            "desc": "Cubic Inches"
                },{
                    "code": "CUM",            "desc": "Cubic Meters"
                },{
                    "code": "CUY",            "desc": "Cubic Yards"
                },{
                    "code": "DAY",            "desc": "Days"
                },{
                    "code": "DG",            "desc": "Decigrams"
                },{
                    "code": "DL",            "desc": "Deciliters"
                },{
                    "code": "DM",            "desc": "Decimeters"
                },{
                    "code": "DOZ",            "desc": "Dozen"
                },{
                    "code": "DRA",            "desc": "Dram"
                },{
                    "code": "DRM",            "desc": "DRUM"
                },{
                    "code": "EA",            "desc": "Each"
                },{
                    "code": "FOZ",            "desc": "Fluid Ounce "
                },{
                    "code": "FT",            "desc": "Feet"
                },{
                    "code": "G",            "desc": "Grams"
                },{
                    "code": "GAL",            "desc": "Gallon - US Liquid Measure"
                },{
                    "code": "GRP",            "desc": "Grains "
                },{
                    "code": "GRS",            "desc": "Gross"
                },{
                    "code": "GRT",            "desc": "Grains - Troy"
                },{
                    "code": "HUN",            "desc": "Hundreds"
                },{
                    "code": "IN",            "desc": "Inches"
                },{
                    "code": "KG",            "desc": "Kilograms"
                },{
                    "code": "KGF",            "desc": "Kilograms of Force per CM"
                },{
                    "code": "KL",            "desc": "Kiloliters"
                },{
                    "code": "KM",            "desc": "Kilometers"
                },{
                    "code": "KWH",            "desc": "Kilowatt Hours"
                },{
                    "code": "L",            "desc": "Liters"
                },{
                    "code": "LBS",            "desc": "Pounds"
                },{
                    "code": "LBT",            "desc": "Pounds - Troy"
                },{
                    "code": "LNK",            "desc": "Link"
                },{
                    "code": "LOT",            "desc": "Batch Lot"
                },{
                    "code": "LT",            "desc": "Long Tons"
                },{
                    "code": "M",            "desc": "Meters"
                },{
                    "code": "MDY",            "desc": "Person Day"
                },{
                    "code": "MG",            "desc": "Milligrams"
                },{
                    "code": "MHR",            "desc": "Work Hour"
                },{
                    "code": "MIL",            "desc": "Miles"
                },{
                    "code": "ML",            "desc": "Milliliters"
                },{
                    "code": "MM",            "desc": "Millimeters"
                },{
                    "code": "MMO",            "desc": "Work Month"
                },{
                    "code": "MT",            "desc": "Metric Tons"
                },{
                    "code": "MWK",            "desc": "Work Week"
                },{
                    "code": "OZT",            "desc": "Ounces - Troy"
                },{
                    "code": "PK",            "desc": "Cello Pack"
                },{
                    "code": "PKD",            "desc": "Peck - Dry Measure"
                },{
                    "code": "PL",            "desc": "Pallet"
                },{
                    "code": "PTD",            "desc": "Pint - Dry Measure"
                },{
                    "code": "PTL",            "desc": "Pint - Liquid Measure"
                },{
                    "code": "PWT",            "desc": "Pennyweight - Troy"
                },{
                    "code": "QTD",            "desc": "Quart - Dry Measure"
                },{
                    "code": "QTL",            "desc": "Quart - Liquid Measure"
                },{
                    "code": "SCM",            "desc": "Square Centimeters"
                },{
                    "code": "SDM",            "desc": "Square Decimeters"
                },{
                    "code": "SF",            "desc": "Square Feet"
                },{
                    "code": "SHT",            "desc": "Short Ton"
                },{
                    "code": "SHW",            "desc": "Short Hundred Weight"
                },{
                    "code": "SLV",            "desc": "SLEEVE"
                },{
                    "code": "SM",            "desc": "Square Meters"
                },{
                    "code": "SMM",            "desc": "Square Millimeters"
                },{
                    "code": "SQF",            "desc": "Square Feet"
                },{
                    "code": "SQI",            "desc": "Square Inches"
                },{
                    "code": "SQM",            "desc": "Square Miles"
                },{
                    "code": "SQY",            "desc": "Square Yards"
                },{
                    "code": "ST",            "desc": "Short Tons"
                },{
                    "code": "TON",            "desc": "Tons"
                },{
                    "code": "TRK",            "desc": "TRUCK LOAD"
                },{
                    "code": "TUB",            "desc": "TUB"
                },{
                    "code": "UNT",            "desc": "Units (generic)"
                },{
                    "code": "YD",            "desc": "Yard"
                }
             ]
        }
    }
    
        componentDidMount(){
          
        }
    render() {
        return (
            <div>
                    
                <section className="content">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="container-fluid">
                                    <div className="form-inline" >
                                        <label htmlFor="code" className="m-2 " >Code <span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="Code" />
                                        <label htmlFor="name" className="m-2 " >Description<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control m-2 col-sm-3 form-control-sm" id="Description" />
                                        <label htmlFor="code" className="" >isActive</label>
                                        <input type="checkbox" className="form-check-input m-1" id="isactive" /> &nbsp;&nbsp;&nbsp;
                                        <button className="btn btn-primary btn-sm">Add</button>
                                    </div>
                                    
                                </div>

                            </div>
                            <div className="card-body">
                            <table id="materialtype_master_table" className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.uomList.map((item) =>
                                    
                                    <tr key={item.id}>
                                        
                                        <td>{item.code}</td>
                                        <td><span className="tag tag-success">{item.desc}</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th> Code</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                                </tfoot>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default MaterialType
