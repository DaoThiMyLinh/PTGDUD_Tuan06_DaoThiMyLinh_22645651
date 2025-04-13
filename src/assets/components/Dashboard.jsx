import { useEffect } from "react";
import { Overviewcard } from "./Overviewcard";
import { useState } from "react";
import { data } from "react-router";

export function Dashboard() {
const [dataA, setDataA] = useState(0); 
const [dataB, setDataB] = useState(0); 
const [dataC, setDataC] = useState(0); 
useEffect(() => {
    const fetchTurnOver = async()  => {
        const dataJson = await fetch("http://localhost:3000/orders")
        .then(res => res.json())
        .then(data => data)
        if(dataJson && dataJson.length > 0) {
            setDataA(
                dataJson.reduce((total, data) => (total += data.totalPrice), 0)
            )
        }
    }
    fetchTurnOver();

    const fetchProfit = async() => {
        const dataJson =  await fetch("http://localhost:3000/orders")
        .then(res => res.json())
        .then(data => data)
        if(dataJson && dataJson.length > 0) {
            setDataB(
                dataJson.reduce((total, data) => (total += data.profit), 0)
            )
        }
    }
    fetchProfit()

    const fetchCustomer = async() => {
        const dataJson =  await fetch("http://localhost:3000/customers")
        .then(res => res.json())
        .then(data => data)
        if(dataJson && dataJson.length > 0) {
            setDataC(dataJson.length)
        }
    }
        fetchCustomer();


}, [])

    return (
        <>
           <section className="p-2">
            <div className="flex gap-2">
            <Overviewcard title={"turnover"} figure={dataA}/>
            <Overviewcard title={"profit"} figure={dataB}/>
            <Overviewcard title={"New customer"} figure={dataC}/>
            </div>

           </section>
        </>
    )
}