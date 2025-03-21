PGDMP     	                    }            lms_database    15.10    15.10 !               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    27104    lms_database    DATABASE     �   CREATE DATABASE lms_database WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE lms_database;
                postgres    false            �            1259    27144    Assignments    TABLE     p  CREATE TABLE public."Assignments" (
    id_assignment integer NOT NULL,
    id_course integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255),
    deadline timestamp with time zone NOT NULL,
    status boolean NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 !   DROP TABLE public."Assignments";
       public         heap    postgres    false            �            1259    27143    Assignments_id_assignment_seq    SEQUENCE     �   CREATE SEQUENCE public."Assignments_id_assignment_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."Assignments_id_assignment_seq";
       public          postgres    false    219                       0    0    Assignments_id_assignment_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."Assignments_id_assignment_seq" OWNED BY public."Assignments".id_assignment;
          public          postgres    false    218            �            1259    27135    Courses    TABLE     �  CREATE TABLE public."Courses" (
    id_course integer NOT NULL,
    course_name character varying(255) NOT NULL,
    description text,
    start_date timestamp with time zone,
    end_date timestamp with time zone,
    price integer,
    avatar character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    user_create text,
    course_type text
);
    DROP TABLE public."Courses";
       public         heap    postgres    false            �            1259    27134    Courses_id_course_seq    SEQUENCE     �   CREATE SEQUENCE public."Courses_id_course_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."Courses_id_course_seq";
       public          postgres    false    217                       0    0    Courses_id_course_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."Courses_id_course_seq" OWNED BY public."Courses".id_course;
          public          postgres    false    216            �            1259    27153    Enrollments    TABLE     ,  CREATE TABLE public."Enrollments" (
    id_enrollment integer NOT NULL,
    id_user integer NOT NULL,
    id_course integer NOT NULL,
    enrolled_at timestamp with time zone,
    status boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 !   DROP TABLE public."Enrollments";
       public         heap    postgres    false            �            1259    27152    Enrollments_id_enrollment_seq    SEQUENCE     �   CREATE SEQUENCE public."Enrollments_id_enrollment_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."Enrollments_id_enrollment_seq";
       public          postgres    false    221                        0    0    Enrollments_id_enrollment_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."Enrollments_id_enrollment_seq" OWNED BY public."Enrollments".id_enrollment;
          public          postgres    false    220            �            1259    27106    Users    TABLE     V  CREATE TABLE public."Users" (
    id_user integer NOT NULL,
    full_name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �            1259    27105    Users_id_user_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_id_user_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Users_id_user_seq";
       public          postgres    false    215            !           0    0    Users_id_user_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Users_id_user_seq" OWNED BY public."Users".id_user;
          public          postgres    false    214            v           2604    27147    Assignments id_assignment    DEFAULT     �   ALTER TABLE ONLY public."Assignments" ALTER COLUMN id_assignment SET DEFAULT nextval('public."Assignments_id_assignment_seq"'::regclass);
 J   ALTER TABLE public."Assignments" ALTER COLUMN id_assignment DROP DEFAULT;
       public          postgres    false    219    218    219            u           2604    27138    Courses id_course    DEFAULT     z   ALTER TABLE ONLY public."Courses" ALTER COLUMN id_course SET DEFAULT nextval('public."Courses_id_course_seq"'::regclass);
 B   ALTER TABLE public."Courses" ALTER COLUMN id_course DROP DEFAULT;
       public          postgres    false    216    217    217            w           2604    27156    Enrollments id_enrollment    DEFAULT     �   ALTER TABLE ONLY public."Enrollments" ALTER COLUMN id_enrollment SET DEFAULT nextval('public."Enrollments_id_enrollment_seq"'::regclass);
 J   ALTER TABLE public."Enrollments" ALTER COLUMN id_enrollment DROP DEFAULT;
       public          postgres    false    221    220    221            t           2604    27109    Users id_user    DEFAULT     r   ALTER TABLE ONLY public."Users" ALTER COLUMN id_user SET DEFAULT nextval('public."Users_id_user_seq"'::regclass);
 >   ALTER TABLE public."Users" ALTER COLUMN id_user DROP DEFAULT;
       public          postgres    false    215    214    215                      0    27144    Assignments 
   TABLE DATA           �   COPY public."Assignments" (id_assignment, id_course, title, description, deadline, status, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   �(                 0    27135    Courses 
   TABLE DATA           �   COPY public."Courses" (id_course, course_name, description, start_date, end_date, price, avatar, created_at, updated_at, user_create, course_type) FROM stdin;
    public          postgres    false    217   �(                 0    27153    Enrollments 
   TABLE DATA           y   COPY public."Enrollments" (id_enrollment, id_user, id_course, enrolled_at, status, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   �/                 0    27106    Users 
   TABLE DATA           f   COPY public."Users" (id_user, full_name, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   �/       "           0    0    Assignments_id_assignment_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."Assignments_id_assignment_seq"', 1, false);
          public          postgres    false    218            #           0    0    Courses_id_course_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."Courses_id_course_seq"', 5, true);
          public          postgres    false    216            $           0    0    Enrollments_id_enrollment_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."Enrollments_id_enrollment_seq"', 1, false);
          public          postgres    false    220            %           0    0    Users_id_user_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Users_id_user_seq"', 3, true);
          public          postgres    false    214                       2606    27151    Assignments Assignments_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public."Assignments"
    ADD CONSTRAINT "Assignments_pkey" PRIMARY KEY (id_assignment);
 J   ALTER TABLE ONLY public."Assignments" DROP CONSTRAINT "Assignments_pkey";
       public            postgres    false    219            }           2606    27142    Courses Courses_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public."Courses"
    ADD CONSTRAINT "Courses_pkey" PRIMARY KEY (id_course);
 B   ALTER TABLE ONLY public."Courses" DROP CONSTRAINT "Courses_pkey";
       public            postgres    false    217            �           2606    27158    Enrollments Enrollments_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public."Enrollments"
    ADD CONSTRAINT "Enrollments_pkey" PRIMARY KEY (id_enrollment);
 J   ALTER TABLE ONLY public."Enrollments" DROP CONSTRAINT "Enrollments_pkey";
       public            postgres    false    221            y           2606    27115    Users Users_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);
 C   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key";
       public            postgres    false    215            {           2606    27113    Users Users_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id_user);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    215                  x������ � �         �  x��W]O�f���jp�$�C�V.֩��i7H�c�$~m����@S�4T����A�����,V�3�G�Kv����v�KC�����<�9�9�Jk�x�;5Ȋ9�d����N��"	���8:�� >r��!�ڤb���U��5yAl,���(��=QI���eYğ��߮V��/h}'�-�zCAs�����v�V-[5����;�^HJCj*YiVk�7}M��n�fN��-��H�/�2��v~[B�ո��� IDj�ѥ� �qk}�d���7W�`A9����#b���2\^�$0U+��4����_f?�Y�䪭ZnS�֕���R�l�900�z[����(��Td��[%'����K_�����ѣe�H� �ߵ�=��'f�5Ɋ�����-鏣���?_Z2����5�	W8�3>D�mz�g���	�8��İ�^rM�:�����X#��}:�}�<4$����y�R)1�N3��=�޽b� ���kW��J����W�m�b�3,�s����$KU��-}{hx�C�ֆ���S�m��Z�&
�"O'7�Ur�N�������7� d���_BE8K��.�������C�:��	�L�����5�R���^/{�ǔ�m�N��b��`����p�Lq�]�x�Na2��6�Wx�X�h�� ��B��fH����,!gz��~֐\��xt<$F|�Qo���|t ۆ��l|.0'�m���ՏL9�8+�0���Gb�ܵ!$v���MM�J𜄜�4�o ���&�i|4�k�hof�r�P���AA�>���,Y/*PIGv%o�݇��º?������_i�Eȑ�a([h�eh ��dF��w��rK���_1@��7j� �@�Ъ� ��DD��g�
Xp�p̜�T�lh�����Yi� =�!8��&^���F��)&�_&�f�����9�5�5�Vd���L�p9P�Hu%����8&���ФҲJ	o�2���c���B��{S��Y�.ݻ�
�_u�� �f<b/P�� ��|i���QaG)b7$W縎����w'�xy���ÿS�,��LQg�T�g��5�Q`P��5$O�p���T)d�":��*���IY�'k`V�? l��%�\�'_�\���<y�J�ܘϋ���U����2��f��Dl=��HFY)���h�bL��o���|
_^,�}��Q���:KX"W'>�pd1s���:�v"��:�)�I�CN0�>P����c	$YY�R$W�8�X��I�K+��[ ʓ�G_��řC�f��5n%��F\��
�8�RUل��adm�d����!p���c�a�t��:��x~��lM�$�M�,����4��]�Ôf����ڼ���F�f�
�L�PB���^�C�޼}ԫ-Ԛ�٨�4��om5��p��5��/y�'�nqԫI8�+���Q/�U����7�~wNƣ�e�c��d�sO�A:��22���?icZ��[$7�%w(+�׷ p�;����d�g6��	ׁOd�Z&���(6�чiYe.���t���ʢ�t ���H��'�O��9�N>>~��И�\B��d��4Ҧ{]:3��6r�i0�_Tr��j�E<iC�p
wu�uN��?y�O���+��`�)b}��_��m����5ou�ɘ�䐚�E:z��I6���ʥ�Z��mo�n�Nc���Pe��n�C�^�bM���[�:\�������            x������ � �         @  x�}λr�@��z�

���.��U�Ce"�aҠ�@�a$m�T�gRX��N�L�N��xg��`�vo4��W��@7���s��*�V�T�&==�q�4�)��e9a����LO}Go��
+ʹ�鼘$����d IW%�
!�PS�5�*ԥƕ���8�ק�� i�zAhO!�'���vjv��l�yBfŝ;���^����,�FyD9�Rm��=y��Sn���1� <J����_�(����^�s������4�H4�^F[}_X˰��X8�EPVJ7���~��B^�>;YG�� �z;N܃�q�-��     