@extends('layouts.frontend')

@section('content')
<div id="main-content" class="home-page">

            <!-- <new-slider></new-slider> -->
            
            <section class="banner">
                
                <banner-slider></banner-slider>
            </section>      

            <section class="intro">
                <div class="wrap">
                    <div class="logo-div">
                        <img src="images/logo.png" alt="">
                    </div>
                    <intro></intro>
                </div>
            </section>

            <section class="gallery">
                <div class="overlay-wrap">
                    
                </div> 
                <div class="wrap">  
                    <div class="section-title">                     
                        <h1>View Our Gallery</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, facere.</p>
                    </div>              

                    <gallery></gallery> 
                </div>
            </section>

            <section class="facts">
                <div class="overlay-wrap">
                    
                </div>
                <div class="wrap">
                    <h1>facts about <span>chitwan national park</span><img src="images/leaves.png" alt=""></h1>
                    <facts></facts>
                </div>
            </section>

            <section class="testimonials">
                <div class="wrap">
                    <div class="section-title">
                        <h1>Feedback from our guests</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        
                    </div>
                    
                    <testimonials></testimonials>   
                </div>
            </section>
                
       </div>
@endsection
