This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

#ภาพรวมโปรเจคนี้่มีการพัฒนาโดยใช้ next js โดยที่มีโดยวาง structure โปรเจคเป็นตัว ส่วนของ page ส่วนของ component ทีทีการ reuse ในหน้าต่างๆ มีส่วนของ store ซึ่งเป็น global statmanagement ตรงนี้มีการใช้ zustand มีส่วนของ service ที่ใช้ในการ call api และ env สําหรับเก็บข้ออมูลที่เป็น credential เช่น secret key

#สิ่งที่สามารถพัฒนาได้หากมีเวลาปรับปรุงเพิ่ม
- จะทําให้หน้า homepage กับ หน้า blog ให้เป็น server component เพื่อให้ดีต่อ seo มากขึ้น (ตอนนี้มีหน้ส post-detail ที่เป็น server component) handle 
- ทํา modal handle error ให้ครบทุกเคส (ตอนนี้มี handle create post, update post , delete post)

#First, install depedencies
```bash
npm install

#Copy .env.example to create .env file
cp .env.example .env


#Run Development Server
npm run dev


#User For Sign in 

#Username:testUser
#Username:newUser
