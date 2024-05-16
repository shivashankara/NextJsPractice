export default function ReviewDetails({params}:{params:{productId:string, reviewId:string}}) {
    return (
      <main>
        <h1>Review {params.reviewId}  Product Details {params.productId}</h1>
        
      </main>
    );
  }
  