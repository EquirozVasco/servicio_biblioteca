PGDMP     )                	    y            usuarios    13.2    13.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    33240    usuarios    DATABASE     d   CREATE DATABASE usuarios WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE usuarios;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    33241    usuario    TABLE     �   CREATE TABLE public.usuario (
    nombre character varying NOT NULL,
    correo character varying,
    usuario character varying(30) NOT NULL,
    "contraseña" character varying NOT NULL,
    estado boolean NOT NULL,
    idcliente integer NOT NULL
);
    DROP TABLE public.usuario;
       public         heap    postgres    false    3            �            1259    33376    usuario_idcliente_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_idcliente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.usuario_idcliente_seq;
       public          postgres    false    200    3            �           0    0    usuario_idcliente_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.usuario_idcliente_seq OWNED BY public.usuario.idcliente;
          public          postgres    false    201            #           2604    33378    usuario idcliente    DEFAULT     v   ALTER TABLE ONLY public.usuario ALTER COLUMN idcliente SET DEFAULT nextval('public.usuario_idcliente_seq'::regclass);
 @   ALTER TABLE public.usuario ALTER COLUMN idcliente DROP DEFAULT;
       public          postgres    false    201    200            �          0    33241    usuario 
   TABLE DATA           \   COPY public.usuario (nombre, correo, usuario, "contraseña", estado, idcliente) FROM stdin;
    public          postgres    false    200            �           0    0    usuario_idcliente_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.usuario_idcliente_seq', 1, false);
          public          postgres    false    201            %           2606    33386    usuario usuario_pk 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pk PRIMARY KEY (idcliente);
 <   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pk;
       public            postgres    false    200            �   4   x�-.M,��7�,�2�s3s���s9Sr3�8��ML�8K8�b���� ���          �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    33240    usuarios    DATABASE     d   CREATE DATABASE usuarios WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE usuarios;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    33241    usuario    TABLE     �   CREATE TABLE public.usuario (
    nombre character varying NOT NULL,
    correo character varying,
    usuario character varying(30) NOT NULL,
    "contraseña" character varying NOT NULL,
    estado boolean NOT NULL,
    idcliente integer NOT NULL
);
    DROP TABLE public.usuario;
       public         heap    postgres    false    3            �            1259    33376    usuario_idcliente_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_idcliente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.usuario_idcliente_seq;
       public          postgres    false    200    3            �           0    0    usuario_idcliente_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.usuario_idcliente_seq OWNED BY public.usuario.idcliente;
          public          postgres    false    201            #           2604    33378    usuario idcliente    DEFAULT     v   ALTER TABLE ONLY public.usuario ALTER COLUMN idcliente SET DEFAULT nextval('public.usuario_idcliente_seq'::regclass);
 @   ALTER TABLE public.usuario ALTER COLUMN idcliente DROP DEFAULT;
       public          postgres    false    201    200            �          0    33241    usuario 
   TABLE DATA           \   COPY public.usuario (nombre, correo, usuario, "contraseña", estado, idcliente) FROM stdin;
    public          postgres    false    200   �       �           0    0    usuario_idcliente_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.usuario_idcliente_seq', 1, false);
          public          postgres    false    201            %           2606    33386    usuario usuario_pk 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pk PRIMARY KEY (idcliente);
 <   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pk;
       public            postgres    false    200           