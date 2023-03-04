import { Card, CardContent, Typography } from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}
const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Ольга',
            text: 'Брали телефон чоловіку. Дуже задоволений!! Варто брати, якщо ви хочете обновити свій наприклад 81 чи 11й айфон',
        },
        {
            name: 'Макс',
            text: 'В характеристиках указано, что в телефоне есть вспышка и стерозвук (как будто 2002 год на дворе), но очередной раз эпплы забыли упомянуть объём батарей.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    console.log()

    return (
        <>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    margin: '60px 0',
                }}
            >
                Reviews
            </Typography>
            <div>
                {reviews.map((item, i) => (
                    <Card
                        variant="outlined"
                        sx={{
                            margin: '20px 0',
                        }}
                        key={1}
                    >
                        <CardContent>
                            <div>{item.name}:</div>
                            <div>{item.text}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}
export default Reviews
