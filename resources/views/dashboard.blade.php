@extends('layouts.backend')
@section('content')
    <div id="main-content">

{{-- # Take it out on another file and include --}}
       <div class="top-nav">
            <div class="toggle-nav"><i class="ti-menu"></i></div>
            <ul class="right">
                <li>
                    <notifications></notifications>
                </li>
                <li>
                    <messages></messages>
                </li>
                <li>
                    <user></user>
                </li>
            </ul>



        </div>

{{-- # Till here--}}
        <div class="welcome">
            <h1>Welcome <span>To Axle</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo corrupti molestias obcaecati delectus, labore, odit aperiam commodi rerum tempore fuga. Debitis natus voluptate, pariatur omnis.</p>

            <el-button><a href="index-2.php">Start Project</a></el-button>


        </div>

    </div>

@stop