/* CONTEX API */
// -- Uygulamada birden çok bileşenin ihtiyacı olan verileri bileşenlerden
// bağımsız bir şekilde konumlanan merkezlerde yönetmeye yarar.
// Context yapısı içinde verilerin state 'i ve verileri değiştirmeye yarayan 
// fonksiyonları tutabiliriz.
// Context tuttuğumuz state'lerin bileşenlere doğrudan aktarım yapabilen state 
// yönetim aracıdır.


import axios from "axios";
import { createContext, useEffect, useState } from "react";

//1. adım : Context yapısının temelini oluştur
export const UserContext = createContext();

//2. adım : verileri bileşenlere aktaracak olan sağlayıycı ve 
// onun tuttuğu verileri tanımla

export const UserProvider  = ({children}) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        // API'YE İSTEK ATIYORUZ
        .get('https://jsonplaceholder.typicode.com/users')
        //cevap başarılı gelirse users state'ine veriyi aktar
        .then(response => {
            setUsers(response.data);
            setLoading(false);
            })
            //hata alırsak hatayı error state'ine aktar.
         
        .catch (err => {
            setError(err.message);
            setLoading(false);
    });
    }, []);
    // 3. adım : Sağlayıcı fonksiyonları mutlaka provider'ı return etmelidir ve App'i 
    // sarmalamalıdır.
    // value olarak eklenen değerler projedeki bileşenler tarafından erişilebilir olur.
    return (
    <UserContext.Provider value={{users, error, loading}}>
        {children}
        </UserContext.Provider>
    );
}; 