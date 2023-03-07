@extends('layouts.master')


@section('content')

@foreach ($brands as $brand)
    <a href="brands/show">{{$brand->name}}</a><hr />
@endforeach 


@endsection