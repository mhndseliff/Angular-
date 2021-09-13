import { Component, OnInit } from '@angular/core';
import { Product } from './product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title="Ürün Listesi"
  products:Product[]=[
    {id:1,name:"Laptop",price:2500,categoryId:1,description:"Asus ZenBook", imageUrl:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"},
    {id:2,name:"Mouse",price:25,categoryId:2,description:"A4 Tech", imageUrl:"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id:3,name:"Camera",price:125,categoryId:3,description:"Logitech", imageUrl:"https://images.unsplash.com/photo-1626581795188-8efb9a00eeec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9naXRlY2glMjBjYW1lcmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id:4,name:"Keyword",price:50,categoryId:4,description:"Razer", imageUrl:"https://images.unsplash.com/photo-1563605990484-8d4c1fa9c3d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id:5,name:"Monitor",price:1700,categoryId:5,description:"Casper", imageUrl:"https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    
    
    
  ]

  name="Laptop"

  ngOnInit(): void {
  }

  addToCart(product: any){
   alert  ("Added :"  +  product.name)
  }

}
