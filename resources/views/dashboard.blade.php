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
    <div class="router-view">
      <router-view></router-view>        
    </div>

    </div>

@stop